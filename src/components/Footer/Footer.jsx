// Footer.js

import React, { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from "@chakra-ui/react";
import ContactForm from "./ContactForm"; 
import "./Footer.css"; 

const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleContactButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <footer className="Footer">
        <div className="contact-button-sticky">
          <Button colorScheme="teal" onClick={handleContactButtonClick}>
            Contact Us
          </Button>
        </div>
      </footer>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Us</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
         
            <ContactForm />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCloseModal}>
              Close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Footer;
