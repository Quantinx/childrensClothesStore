// Footer.js

import React, { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Button, Flex, Spacer } from "@chakra-ui/react";
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
        
        <div className="copyright-info">
          <p>&copy; {new Date().getFullYear()} Primark. All rights reserved.</p>
          <p>1234 HyperIsland, Virkesvägen 2, 120 30 Stockholm</p> 
        </div>
      </footer>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex>
              <Spacer />
              Contact Us
              <Spacer />
              <Button onClick={handleCloseModal}>
                X
              </Button>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <ContactForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Footer;
