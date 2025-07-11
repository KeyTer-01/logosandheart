import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

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

const StoryItem = ({ title, description, index }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

  return (
    <Box ref={ref} w="100%" py={12} px={6} position="relative">
      <MotionBox
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        zIndex={10 - index}
        position="relative"
      >
        <Heading fontSize={{ base: "lg", md: "2xl" }} mb={4} color="white">
          {title}
        </Heading>
        <Text fontSize="md" color="gray.300">
          {description}
        </Text>
      </MotionBox>
    </Box>
  );
};

const TheStorySection = () => {
  return (
    <Box bg="black" color="white" py={20} px={{ base: 4, md: 10 }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        maxW="7xl"
        mx="auto"
        alignItems="center"
        position="relative"
      >
        {/* Left - Static Section Title */}
        <Box
          flex="1"
          // position={{ base: "static", md: "sticky" }}
          // top="100px"
          pr={{ md: 10 }}
          mb={{ base: 10, md: 0 }}
        >
          <Heading fontSize={{ base: "2xl", md: "4xl" }}>
            THE STORY <br /> WE’RE TELLING
          </Heading>
          <Text mt={4} fontSize="sm" color="gray.400">
            Through curated artworks, <br />
            we will explore faith&apos;s narrative in three movements
          </Text>
        </Box>

        {/* Divider */}
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

        {/* Right - Animated Story Items */}
        <Box flex="2" pl={{ md: 10 }}>
          {storyItems.map((item, index) => (
            <StoryItem
              key={index}
              index={index}
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
