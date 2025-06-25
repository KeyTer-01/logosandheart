import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const storyItems = [
  {
    title: "FAITH MADE US",
    description:
      "A visual journey into creation, the Word, the beginnings of everything, and Man (spirit, soul, body)",
    bg: "linear(to-br, red.800, red.500)",
    glow: "0 0 10px rgba(239, 68, 68, 0.6)",
    color: "red.500",
  },
  {
    title: "FAITH HAS BEEN SAVING US",
    description:
      "Stories of those who walked by faith, showcasing victories and struggles (Faith without works and Faith by works)",
    bg: "linear(to-br, green.800, green.500)",
    glow: "0 0 10px rgba(72, 187, 120, 0.6)",
    color: "red.500",
  },
  {
    title: "FAITH WILL SAVE US",
    description:
      "A call to live by faith now, no matter the darkness, trusting God's word to carry us in this present time",
    bg: "linear(to-br, yellow.600, yellow.400)",
    glow: "0 0 10px rgba(251, 191, 36, 0.5)",
    color: "red.500",
  },
];

const TheStorySection = () => {
  const cardPadding = useBreakpointValue({ base: 6, md: 8 });

  return (
    <Box
      as="section"
      pos="relative"
      id="story"
      bg="white"
      color="black"
      px={{ base: 4, md: 10 }}
      py={{ base: 20, md: 28 }}
      overflow="hidden"
    >
      {/* Blurred Glows */}
      {/* <MotionBox
        pos="absolute"
        top="12%"
        left="6%"
        w="24rem"
        h="24rem"
        bg="red.500"
        rounded="full"
        filter="blur(120px)"
        opacity={0.25}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <MotionBox
        pos="absolute"
        bottom="10%"
        right="5%"
        w="26rem"
        h="26rem"
        bg="green.400"
        rounded="full"
        filter="blur(120px)"
        opacity={0.2}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <MotionBox
        pos="absolute"
        top="40%"
        left="50%"
        w="20rem"
        h="20rem"
        bg="yellow.400"
        rounded="full"
        filter="blur(100px)"
        opacity={0.15}
        transform="translateX(-50%)"
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      /> */}

      {/* Floating Dots */}
      {/* {[
        { top: "15%", left: "10%", bg: "whiteAlpha.400", size: 1 },
        { top: "25%", right: "20%", bg: "red.300", size: 2 },
        { bottom: "20%", left: "30%", bg: "green.300", size: 2 },
        { top: "60%", right: "30%", bg: "yellow.400", size: 1 },
      ].map((dot, i) => (
        <MotionBox
          key={i}
          pos="absolute"
          {...dot}
          w={`${dot.size * 4}px`}
          h={`${dot.size * 4}px`}
          rounded="full"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{
            duration: 2,
            delay: dot.delay || 0,
            repeat: Infinity,
          }}
        />
      ))} */}

      {/* Title and Subtitle */}
      <Box
        pos="relative"
        zIndex={2}
        textAlign="center"
        maxW="3xl"
        mx="auto"
        mb={4}
      >
        <Heading
          fontFamily={"secondary"}
          fontSize={{ base: "3xl", md: "5xl" }}
          mb={4}
          fontWeight="bold"
        >
          The Story We&apos;re Telling
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
          Through curated artworks, we will explore faith&apos;s narrative in
          three movements:
        </Text>
      </Box>

      {/* Story Cards */}
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={2}
        pos="relative"
        zIndex={2}
      >
        {storyItems.map((item, index) => (
          <MotionBox
            key={index}
            // bgGradient={item.bg}
            // boxShadow={item.glow}
            p={cardPadding}
            // rounded="2xl"
            textAlign="left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              y: -6,
              boxShadow: `0 0 50px rgba(255, 255, 255, 0.3)`,
            }}
          >
            <Text
              fontFamily={"secondary"}
              fontSize="xl"
              fontWeight="bold"
              mb={3}
              color={"darkRed"}
            >
              {item.title}
            </Text>
            <Text fontSize="md" color="black">
              {item.description}
            </Text>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TheStorySection;
