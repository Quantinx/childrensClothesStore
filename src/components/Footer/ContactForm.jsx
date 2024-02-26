import React, { useState } from "react";
import { Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="name" mb={4}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-label="Your name"
          required
        />
      </FormControl>

      <FormControl id="email" mb={4}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-label="Your email"
          required
        />
      </FormControl>

      <FormControl id="question" mb={4}>
        <FormLabel>Message</FormLabel>
        <Textarea
          name="message"
          value={formData.question}
          onChange={handleChange}
          aria-label="Put your message or ask your question"
          resize="vertical"
          required
        />
      </FormControl>

      <Button type="submit" colorScheme="teal">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
