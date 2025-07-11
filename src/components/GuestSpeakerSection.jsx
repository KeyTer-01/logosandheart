import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import silhouette from "../assets/images/silhouette-square.jpg";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);
const GuestSpeakerSection = () => {
  const nameFontSize = useBreakpointValue({
    base: "6xl",
    sm: "7xl",
    md: "50px",
    lg: "70px",
  });
  const imageSize = useBreakpointValue({
    base: "200px",
    md: "260px",
    lg: "300px",
  });

  return (
    <Flex
      id="speakers"
      py={16}
      px={{ base: 8, md: 10 }}
      bg="#220b06"
      flexDir={"column"}
      alignItems={"center"}
      position={"relative"}
    >
      <Heading
        fontFamily={"secondary"}
        textAlign="center"
        textTransform={"uppercase"}
        mb={10}
        color={"white"}
        fontWeight={400}
        fontSize={{ base: "4xl", md: "6xl" }}
        letterSpacing={8}
        zIndex={2}
      >
        Keynote Speaker
      </Heading>
      {/* <Stack
      direction={{ base: "column", md: "row" }}
      spacing={10}
      align="center"
      justify="center"
    >
      <Image
        src={silhouette}
        alt="Guest Speaker"
        boxSize="240px"
        borderRadius="full"
        objectFit="cover"
        border="4px solid teal"
      />
      <Box maxW="lg" textAlign={{ base: "center", md: "left" }}>
        <Heading size="md" mb={2}>
          Coming Soon
        </Heading>
        <Text fontSize="md" color="gray.600">
          Our Keynote speaker will be announced shortly. Stay tuned for updates!
        </Text>
      </Box>
    </Stack> */}
      <MotionFlex
        justifyContent="center"
        border="1px solid rgba(255,255,255,0.1)"
        borderRadius="md"
        p={{ base: 4, md: 6 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        direction="column"
        color="white"
        maxW="md"
      >
        <Flex
          direction="column"
          bgGradient="linear(280.94deg, #180701 11.34%, #240801 103.76%)"
          p={2}
        >
          <Text
            fontSize={nameFontSize}
            fontFamily="Inter"
            fontWeight={100}
            lineHeight={1}
            alignSelf="flex-start"
            textAlign="left"
          >
            COMING
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.300"
            alignSelf="flex-start"
            textAlign="left"
            letterSpacing={{ base: -1, md: -2 }}
          >
            SOON!
          </Text>

          <Flex justify="flex-end" mb={4}>
            <Image
              src={silhouette}
              alt="Coming Soon"
              w={imageSize}
              mixBlendMode="color-dodge"
              objectFit="cover"
              borderRadius="md"
            />
          </Flex>
        </Flex>

        <Text fontSize="xs" color="white" mx={2}>
          Our Keynote Speaker will be announced shortly. <br />
          Stay tuned for updates!
        </Text>
      </MotionFlex>

      {/* Top Gradient Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="200px"
        bgGradient="linear(to-t, transparent, blackAlpha.800)"
        zIndex={0}
        opacity={0.3}
      />
      {/* Bottom Gradient Overlay */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height="150px"
        bgGradient="linear(to-t, blackAlpha.800, transparent)"
        zIndex={0}
      />
    </Flex>
  );
};
export default GuestSpeakerSection;
