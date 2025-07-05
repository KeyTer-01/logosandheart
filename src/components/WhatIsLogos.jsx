import { Box, Flex, Grid, Heading, Text, VStack } from "@chakra-ui/react";

const WhatIsLogos = () => {
  return (
    <Box bg="black" color="white" py={20} px={[4, 10, 20]}>
      <Flex direction="column" align="center" textAlign="center" mb={10}>
        <Heading
          as="h1"
          fontSize={["2xl", "4xl"]}
          fontWeight="bold"
          color="white"
        >
          WHAT IS LOGOS & heART?
        </Heading>
      </Flex>

      <Grid
        templateColumns={["1fr", "1fr 1fr"]}
        gap={[6, 8]}
        maxW="6xl"
        mx="auto"
        textAlign="left"
      >
        <Box bg="#1a1a1a" p={6} borderRadius="md">
          <Text>
            <Text as="span" color="yellow.400">
              ●{" "}
            </Text>
            LOGOS represents the the Word of God (John 1:1), tying it directly
            to faith, truth and divine revelation
          </Text>
        </Box>

        <Box bg="#1a1a1a" p={6} borderRadius="md">
          <Text>
            <Text as="span" color="yellow.400">
              ●{" "}
            </Text>
            heART creatively combines “heart” (faith as a way of life) and “art”
            (the medium of expression)
          </Text>
        </Box>

        <Box bg="#1a1a1a" p={6} borderRadius="md">
          <Text>
            <Text as="span" color="yellow.400">
              ●{" "}
            </Text>
            The name as a whole shows that FAITH and ART are deeply connected.
          </Text>
        </Box>

        <Box bg="#1a1a1a" p={6} borderRadius="md">
          <Text>
            <Text as="span" color="yellow.400">
              ●{" "}
            </Text>
            FAITH (Logos) inspires ART (heART). To also mean FAITH INSPIRED ART
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default WhatIsLogos;
