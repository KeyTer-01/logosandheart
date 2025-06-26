import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Button,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ArrowUpRight } from "lucide-react";
import logo from "../assets/images/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Story", href: "#story" },
  { label: "Panelists", href: "#panelists" },
  { label: "Speakers", href: "#speakers" },
  { label: "Expectations", href: "#expect" },
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
        bg="blackAlpha.900"
        maxW="7xl"
        mx="auto"
      >
        {/* <Text fontWeight="bold" fontSize="lg" color="white">
          LOGOS <span style={{ color: "yellow" }}>&</span> he
          <span style={{ color: "red", fontStyle: "italic" }}>ART</span>
        </Text> */}
        <Box>
          <Image
            src={logo}
            alt="LOGOS & heART logo"
            boxSize={["60px", "80px"]}
            objectFit="contain"
          />
        </Box>
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
                maxW="300px"
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
                    <Flex
                      flexDirection={{ base: "column", md: "row" }}
                      width={{ base: "100%", md: "50%" }}
                      gap={4}
                      alignItems={{ base: "flex-start" }}
                      zIndex={1}
                    >
                      <Button
                        as="a"
                        href="https://tix.africa/discover/logosandheart"
                        target="_blank"
                        rel="noopener noreferrer"
                        w="100%"
                        variant="solid"
                        bg="white"
                        color="black"
                        display="flex"
                        gap={2}
                      >
                        Get a Ticket <ArrowUpRight size={20} />
                      </Button>

                      <Button
                        as="a"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdqUUk4RyNUytAnVlmNqBtd0P358IKZ0bP51-g04cbNnakETw/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                        w="100%"
                        variant="outline"
                        color="white"
                        _hover={{ bg: "whiteAlpha.200" }}
                      >
                        Become a Sponsor
                      </Button>
                    </Flex>
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
