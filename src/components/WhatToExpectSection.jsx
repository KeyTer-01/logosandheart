import { Box, Heading, Stack, Text } from "@chakra-ui/react";

const expectations = [
  "An all-round immersive experience",
  "Open call exhibition space for Christian creatives/artists to showcase and sell faith-themed work across every medium",
  "Guided art tours through the three central collections",
  "Stage drama and spoken word performances",
  "Live music and worship",
  "Creative marketplace with food, faith-inspired merchandise, prints, fashion, handmade items",
  "Engaging panel session for Christian creatives to ask real questions and share experiences",
  "Powerful keynote speaker delivering a message rooted in the life of faith",
  "Opportunities for connection, collaboration, and growth within the Christian creative space",
];

const WhatToExpectSection = () => (
  <Box py={16} px={6} bg="white">
    <Heading textAlign="center" mb={10} fontSize={{ base: "2xl", md: "4xl" }}>
      What to Expect
    </Heading>
    <Stack spacing={4} maxW="4xl" mx="auto" color="gray.700">
      {expectations.map((item, index) => (
        <Text key={index} fontSize="md">
          ● {item}
        </Text>
      ))}
      <Text fontWeight="medium" mt={4}>
        Kindly register via this link —{" "}
        <a
          href="https://linktr.ee/logosandheart"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#E53E3E" }}
        >
          https://linktr.ee/logosandheart
        </a>
      </Text>
    </Stack>
  </Box>
);

export default WhatToExpectSection;
