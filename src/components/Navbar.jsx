import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Story", href: "#story" },
  { label: "Panelists", href: "#panelists" },
  { label: "Speakers", href: "#speakers" },
  { label: "Expectations", href: "#expect" },
  { label: "Goal", href: "#goal" },
  { label: "Details", href: "#details" },
  { label: "Register", href: "#cta" },
  { label: "Contact", href: "#contact" },
];

const NavLink = ({ href, children }) => (
  <Link
    px={3}
    py={2}
    rounded="md"
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={href}
    fontWeight="medium"
    fontSize="sm"
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      position="fixed"
      top="0"
      width="100%"
      bg="blackAlpha.800"
      zIndex="1000"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 8 }}
        maxW="7xl"
        mx="auto"
      >
        <Text fontWeight="bold" fontSize="lg" color="white">
          LOGOS & He
          <span style={{ color: "red", fontStyle: "italic" }}>Art</span>
        </Text>

        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Navigation"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          color="white"
          bg="transparent"
          _hover={{ bg: "whiteAlpha.200" }}
        />

        <HStack
          spacing={4}
          display={{ base: "none", md: "flex" }}
          color={"white"}
        >
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </HStack>
      </Flex>

      {/* Mobile Menu */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }} bg="blackAlpha.900">
          <Stack as="nav" spacing={2} px={4}>
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
