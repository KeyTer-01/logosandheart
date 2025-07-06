import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import goal1 from "../assets/images/goal-1.png";
import goal2 from "../assets/images/goal-2.png";
import goal3 from "../assets/images/goal-3.png";
import goal4 from "../assets/images/goal-1.png";
import goal5 from "../assets/images/goal-3.png";
import goal6 from "../assets/images/goal-2.png";
import goal7 from "../assets/images/goal-3.png";
import goal8 from "../assets/images/goal-1.png";
import goal9 from "../assets/images/goal-3.png";
import goal10 from "../assets/images/goal-2.png";

const images = [
  goal1,
  goal2,
  goal3,
  goal4,
  goal5,
  goal6,
  goal7,
  goal8,
  goal9,
  goal10,
];

const TheGoalSection = () => (
  <Box
    id="goal"
    py={{ base: 12, md: 20 }}
    px={{ base: 4, md: 16 }}
    bgGradient="linear(to-br, #010314, #020c1b)"
    color="white"
  >
    {/* Text */}
    <Box mb={10}>
      <Heading
        // fontFamily="mono"
        fontWeight="light"
        fontSize={{ base: "3xl", md: "5xl" }}
        mb={4}
      >
        OUR GOAL
      </Heading>
      <Text
        // fontFamily="mono"
        fontSize={{ base: "sm", md: "md" }}
        maxW="xl"
        color="gray.300"
      >
        When people walk in, they should feel inspired. When they walk out, they
        should know what it means to live by faith.
      </Text>
    </Box>

    {/* Carousel */}
    <Box
      overflowX="auto"
      whiteSpace="nowrap"
      css={{
        "&::-webkit-scrollbar": {
          height: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#555",
          borderRadius: "10px",
        },
      }}
    >
      <Flex gap={4} minW="max-content">
        {images.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`goal-${idx}`}
            // boxSize={{ base: "240px", md: "280px" }}
            objectFit="cover"
            borderRadius="md"
            flexShrink={0}
            w={{ base: "240px", md: "280px" }}
          />
        ))}
      </Flex>
    </Box>
  </Box>
);

export default TheGoalSection;
