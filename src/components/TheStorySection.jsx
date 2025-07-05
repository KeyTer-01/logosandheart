import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);

const storyItems = [
  {
    title: "FAITH MADE US",
    description:
      "A visual journey into creation, the Word, the beginnings of everything, and Man (spirit, soul, body)",
  },
  {
    title: "FAITH HAS BEEN SAVING US",
    description:
      "Stories of those who walked by faith, showcasing victories and struggles (Faith without works and Faith by works)",
  },
  {
    title: "FAITH WILL SAVE US",
    description:
      "A call to live by faith now, no matter the darkness, trusting God's word to carry us in this present time",
  },
];

const StoryItem = ({ title, description }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <MotionBox
      ref={ref}
      w="100%"
      py={24}
      px={6}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <Heading
        fontSize={{ base: "lg", md: "2xl" }}
        mb={4}
        fontFamily="mono"
        color="white"
      >
        {title}
      </Heading>
      <Text fontSize="md" color="gray.300" fontFamily="mono">
        {description}
      </Text>
    </MotionBox>
  );
};

const TheStorySection = () => {
  return (
    <Box bg="black" color="white" py={20} px={{ base: 4, md: 10 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        maxW="7xl"
        mx="auto"
        align="flex-start"
        position="relative"
      >
        {/* Left - Static Section Title */}
        <Box
          flex="1"
          position={{ base: "static", md: "sticky" }}
          top="100px"
          alignSelf="flex-start"
          pr={{ md: 10 }}
          mb={{ base: 10, md: 0 }}
        >
          <Heading fontSize={{ base: "2xl", md: "4xl" }} fontFamily="mono">
            THE STORY <br /> WE’RE TELLING
          </Heading>
          <Text mt={4} fontSize="sm" color="gray.400" fontFamily="mono">
            Through curated artworks, <br />
            we will explore faith&apos;s narrative in three movements
          </Text>
        </Box>

        {/* Divider - Vertical Line with Dot */}
        <Flex
          display={{ base: "none", md: "flex" }}
          align="center"
          justify="center"
          px={6}
          position="relative"
        >
          <Box w="1px" h="full" bg="gray.600" />
          <Box
            position="absolute"
            top="50%"
            transform="translateY(-50%)"
            w="12px"
            h="12px"
            bg="white"
            borderRadius="full"
            border="2px solid gray"
          />
        </Flex>

        {/* Right - Scrolling Items */}
        <Box flex="2" pl={{ md: 10 }}>
          {storyItems.map((item, idx) => (
            <StoryItem
              key={idx}
              title={item.title}
              description={item.description}
            />
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default TheStorySection;
