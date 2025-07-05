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
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ArrowUpRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import logo from "../assets/images/logo.png";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "CALL FOR HEARTIST", href: "#cfa" },
  { label: "CONTACT", href: "#contact" },
];

const MotionFlex = motion(Flex);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const controls = useAnimation();

  // Add sticky shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        controls.start({ boxShadow: "0 2px 10px rgba(0,0,0,0.2)" });
      } else {
        controls.start({ boxShadow: "0 0px 0px rgba(0,0,0,0)" });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  return (
    <MotionFlex
      position="fixed"
      top="0"
      width="100%"
      zIndex="1000"
      justifyContent="center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // animate={controls}
      mt={[0, 4]}
    >
      <Flex
        h="20"
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 12 }}
        width={["100%", "90%"]}
        bg="transparent"
        backdropFilter={["blur(4px)", "blur(8px)"]}
      >
        {/* Left side: Logo and event info */}
        <HStack spacing={8} align="center">
          <Image
            src={logo}
            alt="LOGOS & heART logo"
            boxSize={["50px", "60px"]}
            objectFit="contain"
          />
          <Box
            color="white"
            fontSize="xs"
            lineHeight="short"
            display={{ base: "none", md: "block" }}
          >
            <Text fontWeight="medium">
              SAT, OCTOBER 11, 2025 •{" "}
              <span style={{ opacity: 0.5 }}> 11:00 AM</span>
            </Text>
            <Text fontWeight="light">
              SOLUTION ARENA BY ONIPANU, BUSTOP, LAGOS
            </Text>
          </Box>
        </HStack>

        {/* Right side nav */}
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
              <DrawerOverlay bg="blackAlpha.800" />
              <DrawerContent
                bg="transparent"
                backdropFilter="blur(10px)"
                maxW="300px"
              >
                <DrawerCloseButton color="white" />
                <DrawerBody pt={16}>
                  <VStack spacing={0} align="flex-start">
                    {navLinks.map((link) => (
                      <Button
                        key={link.href}
                        variant="ghost"
                        color="white"
                        size="lg"
                        fontWeight={300}
                        p={0}
                        borderRadius={0}
                        w={"100%"}
                        mt={4}
                        h={8}
                        pb={1}
                        // bg={"yellow"}
                        borderBottom={"0.2px solid #ffffff4a"}
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
                      mt={6}
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
          <HStack spacing={2} align="center">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                color="white"
                fontWeight="medium"
                fontSize="xs"
                onClick={() => handleScroll(link.href)}
                _hover={{
                  color: "purple.400",
                  bg: "whiteAlpha.100",
                }}
              >
                {link.label}
              </Button>
            ))}
            <Button
              as="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdqUUk4RyNUytAnVlmNqBtd0P358IKZ0bP51-g04cbNnakETw/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              color="white"
              borderColor="whiteAlpha.500"
              _hover={{ bg: "whiteAlpha.200" }}
              fontSize="xs"
            >
              BECOME A SPONSOR
            </Button>
            <Button
              as="a"
              href="https://tix.africa/discover/logosandheart"
              target="_blank"
              rel="noopener noreferrer"
              bg="yellow.400"
              color="black"
              size="sm"
              fontWeight="bold"
              fontSize="xs"
              _hover={{ bg: "yellow.500" }}
              display="flex"
              gap={2}
            >
              GET TICKET <ArrowUpRight size={16} />
            </Button>
          </HStack>
        )}
      </Flex>
    </MotionFlex>
  );
};

export default Navbar;
