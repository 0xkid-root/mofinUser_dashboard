import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./SmartAccountModal.css";

const SmartAccountModal = ({ show, onClose, title, content }) => {
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
          onClick={onClose}
          className="custom-close-button"
        >
          Create Smart Account
        </Button>
      </div>
    </Modal>
  );
};

export default SmartAccountModal;
