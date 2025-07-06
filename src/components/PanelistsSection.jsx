import {
  Box,
  Image,
  Text,
  Heading,
  SimpleGrid,
  // useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import silhouette from "../assets/images/silhouette-square.jpg";

const MotionBox = motion(Box);

const panelists = new Array(4).fill({
  name: "COMING",
  title: "SOON",
  image: silhouette,
});

const PanelistsSection = () => {
  return (
    <Box
      w="100%"
      bg="#220b06" // rich dark brown
      py={{ base: 16, md: 20 }}
      px={{ base: 4, md: 10 }}
      id="panelists"
      position="relative"
      zIndex={-1}
    >
      <Heading
        fontFamily="mono"
        textAlign="center"
        mb={10}
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="medium"
        color="white"
        letterSpacing="widest"
        zIndex={100}
      >
        MEET OUR PANELISTS
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 6, md: 10 }}
        maxW="6xl"
        mx="auto"
      >
        {panelists.map((panelist, index) => (
          <MotionBox
            key={index}
            border="1px solid rgba(255,255,255,0.1)"
            p={6}
            textAlign="center"
            color="white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Text fontSize="5xl" fontFamily="mono" letterSpacing="wide" mb={2}>
              {panelist.name}
            </Text>
            <Text
              fontSize="lg"
              fontFamily="mono"
              color="gray.300"
              mb={6}
              letterSpacing="widest"
            >
              {panelist.title}
            </Text>
            <Image
              src={panelist.image}
              alt="Coming Soon"
              mx="auto"
              boxSize="80px"
              borderRadius="full"
              mb={6}
            />
            <Text fontSize="xs" fontFamily="mono" color="gray.400">
              Our Panelists will be announced shortly. <br />
              Stay tuned for updates!
            </Text>
          </MotionBox>
        ))}
      </SimpleGrid>

      {/* Top Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="200px"
        bgGradient="linear(to-t,  transparent, blackAlpha.800)"
        zIndex={-1}
      />
      {/* Bottom Overlay */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height="200px"
        bgGradient="linear(to-t, blackAlpha.800, transparent)"
        zIndex={-1}
      />
    </Box>
  );
};

export default PanelistsSection;
