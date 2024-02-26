// Footer.js

import React, { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from "@chakra-ui/react";
import ContactForm from "./ContactForm"; // Import the ContactForm component
import "./Footer.css"; // Import your Footer.css file for styling

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
            {/* Replace the existing content with the ContactForm component */}
            <ContactForm />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCloseModal}>
              Close
            </Button>
            {/* You can add additional buttons or actions here if needed */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Footer;
