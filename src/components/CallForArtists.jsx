import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Link,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Paintbrush2, ShoppingBag, HeartHandshake } from "lucide-react";
import artistImage from "../assets/images/heartist.png"; // Replace with actual image path

const ctaItems = [
  {
    label: "COME AS AN ARTIST",
    icon: Paintbrush2,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdG7eZ2xdwg0dOMX8DBpDeGwu1dPX2unUWoaxbkQGkBWWaLow/viewform?usp=header",
  },
  {
    label: "BECOME A VENDOR",
    icon: ShoppingBag,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe4VBnfcRFQRterJQ7Wmor-W1lPRtyvoVpWhOK3d4EkEIUe8Q/viewform?usp=header",
  },
  {
    label: "BECOME A VOLUNTEER",
    icon: HeartHandshake,
    link: "https://linktr.ee/logosandheart",
  },
];

const CallForArtists = () => {
  return (
    <Box
      id="cta"
      bgGradient="linear(to-b, #0f0c1b, #000000)"
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 20 }}
      position={"relative"}
    >
      {/* Top Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="200px"
        bgGradient="linear(to-t,  transparent, blackAlpha.800)"
        zIndex={1}
      />
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
        justify="space-between"
        maxW="7xl"
        mx="auto"
        gap={10}
      >
        {/* Left Side - Text & Buttons */}
        <Box flex={1} color="white">
          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            fontFamily="mono"
            fontWeight="medium"
            mb={4}
          >
            CALL FOR <br /> HEARTIST
          </Heading>
          <Text fontSize="sm" color="gray.400" mb={10} fontFamily="mono">
            Join the movement. Be a part of something inspiring — create,
            connect, and contribute.
          </Text>

          <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4}>
            {ctaItems.map((item, idx) => (
              <Link
                href={item.link}
                target="_blank"
                key={idx}
                _hover={{ textDecor: "none" }}
              >
                <VStack
                  // bg="whiteAlpha.100"
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                  p={6}
                  spacing={3}
                  borderRadius="md"
                  // textAlign="center"
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  transition="all 0.2s ease"
                  _hover={{ bg: "whiteAlpha.200" }}
                  minH={{ base: 0, md: 36 }}
                >
                  <Icon
                    as={item.icon}
                    alignSelf={"flex-start"}
                    boxSize={6}
                    color="white"
                  />
                  <Text fontSize="sm" fontFamily="mono" color="white">
                    {item.label}
                  </Text>
                </VStack>
              </Link>
            ))}
          </SimpleGrid>
        </Box>

        {/* Right Side - Image */}
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            w="full"
            h="full"
            borderRadius="md"
            overflow="hidden"
            maxW="400px"
            boxShadow="lg"
          >
            <img
              src={artistImage}
              alt="artist"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default CallForArtists;
