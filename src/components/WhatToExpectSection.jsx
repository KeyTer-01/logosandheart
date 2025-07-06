import {
  Box,
  Heading,
  Stack,
  Text,
  Button,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionText = motion(Text);
const MotionBox = motion(Box);

const expectations = [
  "A transformative celebration of creativity, community, and faith",
  "Open call exhibition space for Christian creatives/artists to showcase and sell faith-themed work across every medium",
  "Guided art tours through the three central collections",
  "Stage drama and spoken word performances",
  "Live music and worship",
  "Creative marketplace with food, faith-inspired merchandise, prints, fashion, handmade items",
  "Engaging panel session for Christian creatives to ask real questions and share experiences",
  "Powerful keynote speaker delivering a message rooted in the life of faith",
  "Opportunities for connection, collaboration, and growth within the Christian creative space",
];

const WhatToExpectSection = () => {
  const fontSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Box
      bg="black"
      color="white"
      fontFamily="mono"
      py={{ base: 20, md: 28 }}
      px={{ base: 6, md: 10 }}
      textAlign={["right", "center"]}
    >
      {/* Heading */}
      <Heading
        fontSize={{ base: "2xl", md: "4xl" }}
        letterSpacing="widest"
        mb={2}
      >
        WHAT TO EXPECT
      </Heading>
      <Text fontSize={{ base: "xs", md: "md" }} color="gray.300" mb={[8, 12]}>
        A transformative celebration of <br />
        creativity, community, and faith
      </Text>

      {/* List Box */}
      <Box
        border="1px solid #444"
        maxW="4xl"
        mx="auto"
        textAlign="left"
        fontSize={fontSize}
      >
        {expectations.map((item, index) => (
          <Box
            key={index}
            borderBottom={
              index !== expectations.length - 1 ? "1px solid #444" : "none"
            }
            px={4}
            py={3}
            display="flex"
            alignItems="center"
            gap={2}
          >
            <Text color="gray.400" fontSize="xs">
              ┐
            </Text>
            <Text>{item}</Text>
          </Box>
        ))}
      </Box>

      {/* Buttons */}
      <Flex
        mt={10}
        justify="center"
        gap={4}
        direction={{ base: "column", sm: "row" }}
      >
        {/* <HStack
          spacing={1}
          align="center"
          mt={4}
          mb={8}
          zIndex={4}
          display={["block", "none"]}
        > */}
        <Button
          as="a"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdqUUk4RyNUytAnVlmNqBtd0P358IKZ0bP51-g04cbNnakETw/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          // size="sm"
          color="white"
          borderColor="whiteAlpha.500"
          _hover={{ bg: "whiteAlpha.200" }}
          fontSize="xs"
          borderRadius={0}
          bg={"#FFFFFF0A"}
          fontWeight={"light"}
        >
          BECOME A SPONSOR
        </Button>
        <Button
          as="a"
          href="https://tix.africa/discover/logosandheart"
          target="_blank"
          rel="noopener noreferrer"
          bg="#FFCB04"
          color="black"
          // size="sm"
          fontWeight="bold"
          fontSize="xs"
          // _hover={{ bg: "#FFCB04" }}
          borderRadius={0}
          // ml={2}
        >
          GET TICKET
        </Button>
        {/* </HStack> */}
      </Flex>
    </Box>
  );
};

export default WhatToExpectSection;
