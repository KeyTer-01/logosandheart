import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Link,
  Image,
} from "@chakra-ui/react";
import paintbrush from "../assets/images/brush.png";
import shop from "../assets/images/shop.png";
import love from "../assets/images/lovely.png";
import artistImage from "../assets/images/heartist.png"; // Replace with actual image path

const ctaItems = [
  {
    label: "COME AS AN ARTIST",
    icon: paintbrush,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdG7eZ2xdwg0dOMX8DBpDeGwu1dPX2unUWoaxbkQGkBWWaLow/viewform?usp=header",
  },
  {
    label: "BECOME A VENDOR",
    icon: shop,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe4VBnfcRFQRterJQ7Wmor-W1lPRtyvoVpWhOK3d4EkEIUe8Q/viewform?usp=header",
  },
  {
    label: "BECOME A VOLUNTEER",
    icon: love,
    link: "https://linktr.ee/logosandheart",
  },
];

const CallForArtists = () => {
  return (
    <Box
      id="cta"
      background="radial-gradient(50% 50% at 50% 50%, #1F1329 0%, #100A15 100%);"
      // bgGradient="linear(to-b, #0f0c1b, #000000)"
      py={{ base: 16, md: 0 }}
      // px={{ base: 6, md: 20 }}
      position={"relative"}
    >
      {/* Top Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="300px"
        bgGradient="linear(to-t,  transparent, blackAlpha.900)"
        zIndex={1}
      />

      {/* Bottom Overlay */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height="300px"
        bgGradient="linear(to-t, blackAlpha.900, transparent)"
        zIndex={2}
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
        <Box flex={2} color="white" zIndex={2} px={{ base: 6, md: 20 }}>
          <Box w={["100%", "65%"]}>
            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              fontFamily="mono"
              fontWeight="medium"
              mb={4}
            >
              CALL FOR HEARTIST
            </Heading>
            <Text fontSize="sm" color="gray.400" mb={10} fontFamily="mono">
              Join the movement. Be a part of something inspiring — create,
              connect, and contribute.
            </Text>
            <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4} mt={6}>
              {ctaItems.map((item, idx) => (
                <Link
                  href={item.link}
                  target="_blank"
                  key={idx}
                  _hover={{ textDecor: "none" }}
                >
                  <VStack
                    border="1px solid"
                    borderColor="whiteAlpha.300"
                    py={6}
                    px={4}
                    spacing={3}
                    borderRadius="md"
                    align={["center", "flex-start"]}
                    transition="all 0.2s ease"
                    _hover={{ bg: "whiteAlpha.200" }}
                    // w={["full", "60%"]}
                  >
                    <Image src={item.icon} boxSize={8} color="white" />
                    <Text
                      fontSize="sm"
                      // fontFamily="mono"
                      color="white"
                      letterSpacing={1}
                      // textAlign="center"
                    >
                      {item.label}
                    </Text>
                  </VStack>
                </Link>
              ))}
            </SimpleGrid>
          </Box>
        </Box>

        {/* Right Side - Image */}
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          // bg={"yellow"}
          w={"100%"}
        >
          <Box
            w="100%"
            // h="100%"
            borderRadius="md"
            overflow="hidden"
            maxW="400px"
            // bg={"yellow"}
            // boxShadow="lg"
          >
            <img
              src={artistImage}
              alt="artist"
              style={{
                width: "100%",
                // height: "100%",
                // objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default CallForArtists;
