import {
  Box,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  Icon,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const MotionBox = motion(Box);
const MotionText = motion(Text);

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

const WhatToExpectSection = () => {
  const iconSize = useBreakpointValue({ base: "14px", md: "18px" });

  return (
    <Box
      as="section"
      position="relative"
      bg="white"
      color="gray.800"
      py={{ base: 20, md: 28 }}
      px={{ base: 6, md: 10 }}
      overflow="hidden"
    >
      {/* Soft Glow Background Elements */}
      <MotionBox
        pos="absolute"
        top="5%"
        left="5%"
        w="20rem"
        h="20rem"
        bg="red.100"
        rounded="full"
        filter="blur(100px)"
        opacity={0.4}
        zIndex={0}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <MotionBox
        pos="absolute"
        bottom="5%"
        right="5%"
        w="20rem"
        h="20rem"
        bg="yellow.100"
        rounded="full"
        filter="blur(100px)"
        opacity={0.4}
        zIndex={0}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Section Heading */}
      <Box textAlign="center" mb={12} pos="relative" zIndex={2}>
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          color="gray.800"
        >
          What to Expect
        </Heading>
        <Text mt={3} fontSize={{ base: "md", md: "lg" }} color="gray.600">
          A transformative celebration of creativity, community, and faith
        </Text>
      </Box>

      {/* Expectations List */}
      <Stack spacing={5} maxW="5xl" mx="auto" pos="relative" zIndex={2}>
        {expectations.map((item, index) => (
          <MotionText
            key={index}
            fontSize={{ base: "md", md: "lg" }}
            color="gray.700"
            display="flex"
            alignItems="start"
            gap={3}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Icon as={Sparkles} color="red.400" boxSize={iconSize} mt={1} />
            {item}
          </MotionText>
        ))}

        {/* Registration CTA */}
        <MotionText
          fontWeight="medium"
          fontSize={{ base: "md", md: "lg" }}
          mt={6}
          textAlign="center"
          color="gray.700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: expectations.length * 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Kindly register via this link —{" "}
          <Link
            href="https://linktr.ee/logosandheart"
            isExternal
            color="red.500"
            fontWeight="bold"
            _hover={{ textDecoration: "underline", color: "red.400" }}
          >
            https://linktr.ee/logosandheart
          </Link>
        </MotionText>
      </Stack>
    </Box>
  );
};

export default WhatToExpectSection;
