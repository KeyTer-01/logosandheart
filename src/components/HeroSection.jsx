import {
  Box,
  Flex,
  Text,
  Heading,
  Stack,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Calendar, MapPin, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const HeroSection = () => {
  const iconSize = useBreakpointValue({ base: 18, md: 24 });
  const fontSize = useBreakpointValue({ base: "sm", md: "sm", lg: "lg" });
  const gap = useBreakpointValue({ base: 2, md: 2, lg: 3 });
  const px = useBreakpointValue({ base: 4, md: 6 });
  const py = useBreakpointValue({ base: 2, md: 3 });

  return (
    <Box
      as="section"
      id="home"
      minH="100vh"
      pos="relative"
      bg="black"
      overflow="hidden"
    >
      {/* Artistic Background */}
      <Box pos="absolute" inset="0" opacity={0.3}>
        <MotionBox
          pos="absolute"
          top="5rem"
          left="5rem"
          w="18rem"
          h="18rem"
          bg="red.500"
          rounded="full"
          filter="blur(60px)"
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <MotionBox
          pos="absolute"
          bottom="5rem"
          right="5rem"
          w="24rem"
          h="24rem"
          bg="green.500"
          rounded="full"
          filter="blur(60px)"
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 2, delay: 1, repeat: Infinity }}
        />
        <MotionBox
          pos="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="20rem"
          h="20rem"
          bg="yellow.400"
          rounded="full"
          filter="blur(60px)"
          animate={{ opacity: [0, 0.4, 0] }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
        />
      </Box>

      {/* Floating Art Elements */}
      <Box pos="absolute" inset="0" pointerEvents="none">
        {[
          { top: "25%", left: "2.5rem", size: 2, bg: "red.400" },
          { top: "33%", right: "5rem", size: 1, bg: "yellow.400", delay: 0.3 },
          { bottom: "25%", left: "25%", size: 3, bg: "green.400", delay: 0.7 },
          { top: "66%", right: "33%", size: 2, bg: "blue.400", delay: 1 },
        ].map((dot, i) => (
          <MotionBox
            key={i}
            pos="absolute"
            {...dot}
            w={`${dot.size}px`}
            h={`${dot.size}px`}
            rounded="full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{
              duration: 2,
              delay: dot.delay || 0,
              repeat: Infinity,
            }}
          />
        ))}
      </Box>

      {/* Content */}
      <Flex
        pos="relative"
        zIndex={10}
        textAlign="center"
        color="white"
        px={8}
        py={24}
        maxW="6xl"
        mx="auto"
        align="center"
        justify="center"
        direction="column"
      >
        <Flex align="center" justify="center" mb={6}>
          <Heart size={40} color="red" className="animate-pulse" />
          <Heading
            fontSize={{ base: "5xl", md: "7xl" }}
            fontWeight="bold"
            mx={4}
          >
            <span style={{ color: "grey" }}>LOGOS</span> & He
            <span style={{ color: "red", fontStyle: "italic" }}>Art</span>
          </Heading>
          <Heart size={40} color="red" className="animate-pulse" />
        </Flex>

        <Text
          fontSize={{ base: "lg", md: "xl" }}
          mb={2}
          color="gray.400"
          maxW="3xl"
          mx="auto"
          lineHeight="tall"
        >
          A faith-based exhibition that transcends a mere event, it is a
          revelation of faith. <br /> This year&apos;s theme is:
        </Text>
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          mb={8}
          color="gray.100"
          fontWeight="bold"
        >
          FAITH WILL SAVE US
        </Text>

        {/* Updated Info Section */}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 4, md: 8 }}
          mb={{ base: 8, md: 12 }}
          align="center"
          justify="center"
          fontSize={fontSize}
        >
          <Flex
            align="center"
            gap={gap}
            px={px}
            py={py}
            border="1px solid"
            borderColor="red.500"
            rounded="full"
            backdropFilter="blur(6px)"
            bg="whiteAlpha.100"
          >
            <Calendar color="red" size={iconSize} />
            <span>October 11, 2025 — 11AM</span>
          </Flex>

          <Flex
            align="center"
            gap={gap}
            px={px}
            py={py}
            border="1px solid"
            borderColor="green.500"
            rounded="full"
            backdropFilter="blur(6px)"
            bg="whiteAlpha.100"
          >
            <MapPin color="green" size={iconSize} />
            <span>Solution Arena, Lagos</span>
          </Flex>

          <Flex
            align="center"
            gap={gap}
            px={px}
            py={py}
            border="1px solid"
            borderColor="yellow.400"
            rounded="full"
            backdropFilter="blur(6px)"
            bg="whiteAlpha.100"
          >
            <Users color="gold" size={iconSize} />
            <span>Christian Creatives</span>
          </Flex>
        </Stack>

        {/* CTA Buttons */}
        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing={6}
          mt={8}
          justify="center"
        >
          <Button
            as="a"
            href="https://linktr.ee/logosandheart"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            colorScheme="red"
            px={10}
            py={4}
            fontSize="lg"
            rounded="full"
            boxShadow="2xl"
            _hover={{ transform: "scale(1.05)" }}
            transition="all 0.3s"
          >
            Register / Showcase
          </Button>
          <Button
            size="lg"
            variant="outline"
            color="white"
            borderColor="whiteAlpha.600"
            px={10}
            py={4}
            fontSize="lg"
            rounded="full"
            backdropFilter="blur(6px)"
            boxShadow="xl"
            _hover={{ bg: "white", color: "black", transform: "scale(1.05)" }}
            transition="all 0.3s"
          >
            Learn More
          </Button>
        </Stack>
      </Flex>

      {/* Scroll Indicator */}
      <MotionFlex
        pos="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        w={6}
        h={10}
        border="2px solid"
        borderColor="whiteAlpha.600"
        rounded="full"
        justify="center"
        align="start"
        backdropFilter="blur(4px)"
      >
        <Box w={1} h={3} bg="red.400" mt={2} rounded="full" />
      </MotionFlex>
    </Box>
  );
};

export default HeroSection;
