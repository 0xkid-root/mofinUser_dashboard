import React, { useState } from "react";
import { Modal, Button, ProgressBar, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SmartAccountModal.css";
import { createWalletClient, custom, encodeFunctionData } from "viem";
import { createModularAccountAlchemyClient } from "@alchemy/aa-alchemy";
import { WalletClientSigner } from "@alchemy/aa-core";
import { sepolia } from "@alchemy/aa-core";
import { useWallets } from "@privy-io/react-auth";
import { abi } from "./InteractionJson.js";

const SmartAccountModal = ({ show, onClose, title }) => {
  const contractAddress = "0x053a63d4202721f9155d8adbfa52f257b5e1776d";
  const { wallets } = useWallets();

  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const [isMessageSigned, setIsMessageSigned] = useState(false);
  const [txHash, setTxHash] = useState("");
  const [txHashLoading, setTxHashLoading] = useState(false); // Loading state for txHash

  async function handleProcess() {
    setLoading(true);

    const selectedWallet = wallets.find((wallet) => wallet.walletClientType);
    if (!selectedWallet) {
      console.error("No supported wallet found");
      setLoading(false);
      return;
    }

    try {
      // Step 1: Smart Account Creation
      const eip1193provider = await selectedWallet.getEthereumProvider();
      if (!eip1193provider) {
        console.error("EIP1193 provider not available");
        setLoading(false);
        return;
      }

      const privyClient = createWalletClient({
        account: selectedWallet.address,
        chain: sepolia,
        transport: custom(eip1193provider),
      });
      const privySigner = new WalletClientSigner(privyClient, "json-rpc");

      const smartAccountClient = await createModularAccountAlchemyClient({
        apiKey: "3pnnRUT1hHeyV8bV5hJcAS6MLA4sHS7w",
        chain: sepolia,
        signer: privySigner,
        gasManagerConfig: {
          policyId: "35c8b30c-612a-4a46-98ca-634ed652972c",
        },
      });

      setIsAccountCreated(true);
      setCurrentStep(2); // Move to step 2

      // Step 2: Sign Message
      const cd = encodeFunctionData({
        abi,
        functionName: "changeX",
        args: [48n],
      });
      const uo = await smartAccountClient.sendUserOperation({
        uo: {
          target: contractAddress,
          data: cd,
        },
      });
      setIsMessageSigned(true);
      setCurrentStep(3);

      // Step 3: Transaction Hash
      setTxHashLoading(true); // Start loading for txHash
      const txHash = await smartAccountClient.waitForUserOperationTransaction(
        uo
      );
      setTxHash(txHash);
      setTxHashLoading(false); 
      setCurrentStep(4); 
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  const renderStepContent = () => (
    <div className="steps-container">
      <div className="step">
        <h5>Step 1: Smart Account</h5>
        <div className="step-status">
          {isAccountCreated ? (
            <span className="green-tick">✔</span>
          ) : (
            <span className="pending">•</span>
          )}
          {isAccountCreated
            ? "Account Created"
            : "Initializing Smart Account..."}
        </div>
      </div>

      <div className="step">
        <h5>Step 2: Sign Message</h5>
        <div className="step-status">
          {isMessageSigned ? (
            <span className="green-tick">✔</span>
          ) : (
            <span className="pending">•</span>
          )}
          {isMessageSigned ? "Message Signed" : "Signing Message..."}
        </div>
      </div>

      <div className="step">
        <h5>Step 3: Wait for Transaction</h5>
        <div className="step-status">
          {txHash ? (
            <div>
              Transaction Hash:{" "}
              <a
                href={`https://sepolia.etherscan.io/tx/${txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="tx-link"
              >
                Hash{" "}
              </a>
            </div>
          ) : txHashLoading ? (
            <div>
              Waiting for Transaction Hash...{" "}
              <Spinner animation="border" size="sm" />
            </div>
          ) : (
            "Waiting for Transaction Hash..."
          )}
        </div>
      </div>

      {currentStep === 4 && (
        <div className="step-completed">
          <span className="green-tick">✔</span> All Steps Completed
          Successfully!
        </div>
      )}
    </div>
  );

  const progressPercentage = ((currentStep - 1) / 3) * 100;

  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton={!loading}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Step Progress */}
        <ProgressBar now={progressPercentage} className="mb-3 custom-progress-bar"  sx={{backgroundColor:"black"}} />
        {renderStepContent()}
      </Modal.Body>
      <div className="modal-footer-custom">
        {!loading && currentStep === 1 && (
          <Button className="custom-close-button" onClick={handleProcess}>
            Start Creation
          </Button>
        )}
        {!loading && currentStep === 4 && (
          <Button onClick={onClose} className="custom-close-button">
            Close
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default SmartAccountModal;
