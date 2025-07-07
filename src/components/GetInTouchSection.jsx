import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  // VStack,
  useToast,
  HStack,
  Icon,
  Link,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Phone, MessageCircle } from "lucide-react";

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
        "service_zzx0b54", // Replace with your EmailJS service ID
        "template_sh0cbfh", // Replace with your EmailJS template ID
        formData,
        "KndLyucbTLnPg2YW0" // Replace with your EmailJS public key
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
    <Box
      id="contact"
      py={20}
      pb={[80, 40]}
      px={6}
      bgGradient="linear(to-b, #050505, #0c1b1f)"
      color="white"
      position={"relative"}
    >
      {/* Bottom Overlay */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height="200px"
        bgGradient="linear(to-t, blackAlpha.800, transparent)"
        zIndex={0}
      />
      <Heading
        mb={4}
        textAlign="center"
        fontSize={{ base: "3xl", md: "6xl" }}
        // fontFamily="monospace"
        fontWeight="light"
        textTransform="uppercase"
        letterSpacing={1}
      >
        Get in touch
      </Heading>

      <Text textAlign="center" mb={10} color="gray.400" fontSize="sm">
        We&apos;d love to hear from you. Fill out the form below and we&apos;ll
        respond as soon as we can.
      </Text>

      <Box maxW="4xl" mx="auto" as="form" onSubmit={handleSubmit}>
        <Stack spacing={6}>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={6}
            width="100%"
          >
            <FormControl isRequired flex={1}>
              <FormLabel color="gray.300">Name</FormLabel>
              <Input
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
                bg="gray.900"
                borderColor="gray.700"
                _placeholder={{ color: "gray.500" }}
                _focus={{ borderColor: "#ffcb04", boxShadow: "none" }}
                color="white"
                backgroundColor={"transparent"}
              />
            </FormControl>

            <FormControl isRequired flex={1}>
              <FormLabel color="gray.300">Email</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                bg="gray.900"
                borderColor="gray.700"
                _placeholder={{ color: "gray.500" }}
                _focus={{ borderColor: "#ffcb04", boxShadow: "none" }}
                color="white"
                backgroundColor={"transparent"}
              />
            </FormControl>
          </Stack>

          <FormControl isRequired>
            <FormLabel color="gray.300">Message</FormLabel>
            <Textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              bg="gray.900"
              borderColor="gray.700"
              _placeholder={{ color: "gray.500" }}
              _focus={{ borderColor: "#ffcb04", boxShadow: "none" }}
              color="white"
              backgroundColor={"transparent"}

              // borderRadius={0}
            />
          </FormControl>

          <Box textAlign={{ base: "center", md: "right" }}>
            <Button
              type="submit"
              bg="#ffcb04"
              color="black"
              _hover={{ bg: "#f2bd00" }}
              rightIcon={<Box as="span">→</Box>}
              px={8}
              py={6}
              fontWeight="medium"
              width={{ base: "full", md: "auto" }}
              borderRadius={0}
            >
              Send Message
            </Button>
          </Box>
        </Stack>
      </Box>

      <Box mt={16} textAlign="center">
        <Box
          maxW="sm"
          mx="auto"
          borderWidth="1px"
          borderColor="gray.700"
          borderRadius="md"
          py={4}
          px={6}
          mt={6}
        >
          <Text fontSize="sm" color="gray.400" mb={4}>
            PREFER A QUICK CHAT OR CALL
          </Text>
          <HStack justify="center" spacing={{ base: 4, md: 6 }} flexWrap="wrap">
            <Link
              href="tel:09077698077"
              display="flex"
              alignItems="center"
              color="white"
              fontSize="sm"
              _hover={{ color: "#ffcb04" }}
            >
              <Icon as={Phone} mr={2} /> CALL US
            </Link>
            <Link
              href="https://wa.me/2349077698077"
              isExternal
              display="flex"
              alignItems="center"
              fontSize="sm"
              color="#25D366"
              _hover={{ color: "#128C7E" }}
            >
              <Icon as={MessageCircle} mr={2} /> CHAT ON WHATSAPP
            </Link>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default GetInTouchSection;
