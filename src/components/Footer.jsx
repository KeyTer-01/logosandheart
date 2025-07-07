import { Box, Flex, IconButton, Image, Link, Text } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../assets/images/lah.png";

const Footer = () => {
  return (
    <Box
      py={6}
      px={4}
      bg={"#FFFFFF05"}
      width="100%"
      position="absolute"
      bottom={0}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="6xl"
        mx="auto"
        textAlign={{ base: "center", md: "left" }}
        gap={{ base: 2, md: 4 }}
      >
        {/* Social Links */}
        <Flex gap={2} justify={{ base: "center", md: "flex-start" }}>
          <Link href="#" isExternal>
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
              color="white"
              _hover={{ color: "#1DA1F2" }}
              size="md"
            />
          </Link>
          <Link href="#" isExternal>
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              color="white"
              _hover={{ color: "#0077B5" }}
              size="md"
            />
          </Link>
          <Link href="#" isExternal>
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook />}
              variant="ghost"
              color="white"
              _hover={{ color: "#1877F2" }}
              size="md"
            />
          </Link>
          <Link href="#" isExternal>
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram />}
              variant="ghost"
              color="white"
              _hover={{ color: "#E1306C" }}
              size="md"
            />
          </Link>
        </Flex>

        {/* Center Logo */}
        <Flex justify="center">
          <Image src={logo} w="106px" />
        </Flex>

        {/* Copyright */}
        <Text
          fontSize="xs"
          color="gray.500"
          textAlign={{ base: "center", md: "right" }}
          mt={4}
        >
          © 2025 Logos & heART. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
