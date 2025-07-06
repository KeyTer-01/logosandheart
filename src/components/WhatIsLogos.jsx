import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import headingImage from "../assets/images/lah.png";

const definitions = [
  "LOGOS represents the Word of God (John 1:1), tying it directly to faith, truth and divine revelation.",
  "heART creatively combines “heart” (faith as a way of life) and “art” (the medium of expression).",
  "The name as a whole shows that FAITH and ART are deeply connected.",
  "FAITH (Logos) inspires ART (heART). To also mean FAITH-INSPIRED ART.",
];

const WhatIsLogos = () => {
  return (
    <Box
      position="relative" // 👈 Needed for absolute overlays
      background="radial-gradient(50% 50% at 50% 50%, #0B171D 0%, #060C0F 100%)"
      color="white"
      py={28}
      px={[6, 10, 20]}
      overflow="hidden"
    >
      {/* Bottom Overlay */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height="200px"
        bgGradient="linear(to-t, blackAlpha.800, transparent)"
        zIndex={1}
      />
      {/* Top Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="400px"
        bgGradient="linear(to-t,  transparent, blackAlpha.800)"
        zIndex={1}
      />

      {/* Content */}
      <Box position="relative" zIndex={2}>
        <Flex justify="center" mb={4}>
          <Image src={headingImage} alt="Theme Icon" width={60} />
        </Flex>

        <Text textAlign="center" color="#FFCB04" mb={10}>
          THEME: FAITH WILL SAVE US
        </Text>

        <Flex direction={["column", "row"]} gap={4}>
          {/* Left side */}
          <Box flex={1}>
            <Text
              fontSize={["2xl", "3xl"]}
              textAlign={["center", "left"]}
              w={["100%", "50%"]}
              textTransform={"uppercase"}
            >
              What is LOGOS & heART?
            </Text>
          </Box>

          {/* Right side */}
          <Box flex={1}>
            <Grid
              templateColumns={["1fr", "1fr 1fr"]}
              gap={[4, 6]}
              maxW="6xl"
              mx="auto"
              textAlign="left"
            >
              {definitions.map((text, index) => (
                <Flex
                  key={index}
                  bg="#FFFFFF0A"
                  p={4}
                  borderRadius="md"
                  alignItems="center"
                  gap={2}
                >
                  <Text fontWeight={900} fontSize={20} color="#FFCB04">
                    !
                  </Text>
                  <Text>{text}</Text>
                </Flex>
              ))}
            </Grid>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default WhatIsLogos;
