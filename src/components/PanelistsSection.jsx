import {
  Box,
  Image,
  Text,
  SimpleGrid,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import silhouette from "../assets/images/silhouette-square.jpg";

const MotionFlex = motion(Flex);

const panelists = new Array(3).fill({
  name: "COMING",
  title: "SOON!",
  image: silhouette,
});

const PanelistsSection = () => {
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
    <Box
      w="100%"
      bg="#220b06"
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 10 }}
      id="panelists"
      position="relative"
      zIndex={-1}
    >
      <Text
        textAlign="center"
        mb={10}
        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
        fontWeight="light"
        color="white"
        letterSpacing="widest"
        zIndex={100}
      >
        MEET OUR PANELISTS
      </Text>

      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 4, md: 8 }}
        maxW="6xl"
        mx="auto"
        px={4}
      >
        {panelists.map((panelist, index) => (
          <MotionFlex
            key={index}
            justifyContent="center"
            border="1px solid rgba(255,255,255,0.1)"
            borderRadius="md"
            p={{ base: 4, md: 6 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            direction="column"
            color="white"
          >
            <Flex
              direction="column"
              bgGradient="linear(280.94deg, #180701 11.34%, #240801 103.76%)"
              p={2}
              mb={2}
            >
              <Text
                fontSize={nameFontSize}
                fontFamily="Inter"
                fontWeight={100}
                lineHeight={1}
                alignSelf="flex-start"
                textAlign="left"
              >
                {panelist.name}
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.300"
                alignSelf="flex-start"
                textAlign="left"
                letterSpacing={{ base: -1, md: -2 }}
              >
                {panelist.title}
              </Text>

              <Flex justify="flex-end" mb={4}>
                <Image
                  src={panelist.image}
                  alt="Coming Soon"
                  w={imageSize}
                  mixBlendMode="screen"
                  objectFit="cover"
                  borderRadius="md"
                />
              </Flex>
            </Flex>

            <Text fontSize="xs" color="white" mx={2}>
              Our Panelists will be announced shortly. <br />
              Stay tuned for updates!
            </Text>
          </MotionFlex>
        ))}
      </SimpleGrid>

      {/* Top Gradient Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="200px"
        bgGradient="linear(to-t, transparent, blackAlpha.800)"
        zIndex={-1}
      />
      {/* Bottom Gradient Overlay */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height="150px"
        bgGradient="linear(to-t, blackAlpha.800, transparent)"
        zIndex={-1}
        opacity={0.3}
      />
    </Box>
  );
};

export default PanelistsSection;
