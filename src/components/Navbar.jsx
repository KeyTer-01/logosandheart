import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Story", href: "#story" },
  { label: "Panelists", href: "#panelists" },
  { label: "Speakers", href: "#speakers" },
  // { label: "Expectations", href: "#expect" },
  // { label: "Goal", href: "#goal" },
  // { label: "Details", href: "#details" },
  // { label: "Register", href: "#cta" },
  // { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  return (
    <Box position="fixed" top="0" width="100%" zIndex="1000">
      <Flex
        h="16"
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 8 }}
        bg="blackAlpha.800"
        maxW="7xl"
        mx="auto"
      >
        <Text fontWeight="bold" fontSize="lg" color="white">
          LOGOS & he
          <span style={{ color: "red", fontStyle: "italic" }}>ART</span>
        </Text>

        {isMobile ? (
          <>
            <IconButton
              size="md"
              icon={<HamburgerIcon />}
              aria-label="Toggle Navigation"
              onClick={onOpen}
              color="white"
              bg="transparent"
              _hover={{ bg: "whiteAlpha.200" }}
            />

            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent
                bg="transparent"
                backdropFilter="blur(10px)"
                maxW="250px"
              >
                <DrawerCloseButton color="white" />
                <DrawerBody pt={16}>
                  <VStack spacing={2} align="flex-start">
                    {navLinks.map((link) => (
                      <Button
                        key={link.href}
                        variant="ghost"
                        color="white"
                        size="lg"
                        justifyContent="flex-start"
                        onClick={() => handleScroll(link.href)}
                        _hover={{ color: "purple.400", bg: "whiteAlpha.100" }}
                      >
                        {link.label}
                      </Button>
                    ))}
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <HStack spacing={2} color="white">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                color="white"
                onClick={() => handleScroll(link.href)}
                _hover={{
                  color: "purple.400",
                  bg: "whiteAlpha.100",
                }}
                fontWeight="medium"
                fontSize="sm"
              >
                {link.label}
              </Button>
            ))}
          </HStack>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
