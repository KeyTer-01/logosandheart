import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import emailjs from "emailjs-com";

const GetInTouchSection = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ae4mj1x", // Replace with your EmailJS service ID
        "template_68wdyjk", // Replace with your EmailJS template ID
        formData,
        "ozRpKh6UNGNv_T38U" // Replace with your EmailJS public key
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "We'll get back to you soon.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast({
            title: "Error sending message",
            description: error.text || "Please try again later.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <Box id="contact" py={20} px={6} bg="blackAlpha.800" color="white">
      <Heading
        mb={4}
        textAlign="center"
        fontSize={{ base: "2xl", md: "4xl" }}
        color="red.400"
      >
        Get In Touch
      </Heading>
      <Text textAlign="center" mb={10} color="gray.300" fontSize="md">
        We&apos;d love to hear from you. Fill out the form below and we&apos;ll
        respond as soon as we can.
      </Text>

      <Box maxW="lg" mx="auto" as="form" onSubmit={handleSubmit}>
        <VStack spacing={6}>
          <FormControl isRequired>
            <FormLabel color="gray.200">Name</FormLabel>
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              bg="gray.900"
              color="white"
              _placeholder={{ color: "gray.500" }}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel color="gray.200">Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="your@example.com"
              value={formData.email}
              onChange={handleChange}
              bg="gray.900"
              color="white"
              _placeholder={{ color: "gray.500" }}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel color="gray.200">Message</FormLabel>
            <Textarea
              name="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              rows={6}
              bg="gray.900"
              color="white"
              _placeholder={{ color: "gray.500" }}
            />
          </FormControl>

          <Button type="submit" bg={"gray.700"} width="full" size="lg" mt={4}>
            Send Message
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default GetInTouchSection;
