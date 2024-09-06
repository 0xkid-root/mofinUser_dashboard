import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./SmartAccountModal.css";
import {
  createWalletClient,
  custom,
  encodeFunctionData,
} from "viem";
import {
  createLightAccountAlchemyClient,
  createModularAccountAlchemyClient,
} from "@alchemy/aa-alchemy";
import { WalletClientSigner } from "@alchemy/aa-core";

import { LocalAccountSigner, sepolia } from "@alchemy/aa-core";

import { useWallets } from "@privy-io/react-auth";
import { abi } from "./InteractionJson.js";

const SmartAccountModal = ({ show, onClose, title, content }) => {
  const contractAddress = "0x053a63d4202721f9155d8adbfa52f257b5e1776d";
  const { wallets } = useWallets();
  const [smartAccountClient, setSmartAccountClient] = useState(null);
  const [loading, setLoading] = useState(false);

  async function initializeClient() {
    setLoading(true);

    const selectedWallet = wallets.find(wallet => wallet.walletClientType);

    if (!selectedWallet) {
      console.error("No supported wallet found");
      setLoading(false);
      return;
    }

    console.log("Selected Wallet:", selectedWallet);

    try {
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
      console.log("privyClient is here:", privyClient);

      const privySigner = new WalletClientSigner(privyClient, "json-rpc");
      console.log("privy signer is here:", privySigner);

      const smartAccountClient = await createModularAccountAlchemyClient({
        apiKey: "3pnnRUT1hHeyV8bV5hJcAS6MLA4sHS7w",
        chain: sepolia,
        signer: privySigner,
        gasManagerConfig: {
          policyId: "35c8b30c-612a-4a46-98ca-634ed652972c",
        },
      });
      console.log("smartAccountClient is here:", smartAccountClient);

      const cd = encodeFunctionData({
        abi,
        functionName: "changeX",
        args: [48n],
      });

      console.log("Sending user operation...");
      console.log("cd call data is here:", cd);

      const uo = await smartAccountClient.sendUserOperation({
        uo: {
          target: contractAddress,
          data: cd,
        },
      });

      console.log("User operation is here:", uo);

      await new Promise(resolve => setTimeout(resolve, 30000));

      console.log("Waiting for user operation transaction...");
      const txHash = await smartAccountClient.waitForUserOperationTransaction(uo);
      console.log("Transaction Hash:", txHash);

      setSmartAccountClient(smartAccountClient);

      console.log('Closing modal');
      onClose();
    } catch (error) {
      console.error("Detailed error:", error);
      console.error("Error message:", error.message);
      console.error("Error stack trace:", error.stack);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{content}</p>
      </Modal.Body>
      <div className="modal-footer-custom">
        <Button 
          className="custom-close-button"
          onClick={initializeClient}
          disabled={loading} 
        >
          {loading ? "Creating..." : "Create Smart Account"}
        </Button>
      </div>
    </Modal>
  );
};

export default SmartAccountModal;
