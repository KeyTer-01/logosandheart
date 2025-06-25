import {
  Box,
  Flex,
  Text,
  Heading,
  Stack,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Calendar, MapPin, Heart } from "lucide-react";
import { motion } from "framer-motion";
import bgImage from "../assets/images/dark-bg.jpg";

const MotionBox = motion(Box);
// const MotionFlex = motion(Flex);

const HeroSection = () => {
  const iconSize = useBreakpointValue({ base: 18, md: 24 });
  const fontSize = useBreakpointValue({ base: "sm", md: "sm", lg: "md" });
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
      bgImage={`url(${bgImage})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      // bgColor={"yellow"}
      display={"flex"}
      alignItems={"flex-end"}
    >
      {/* Overlay */}
      <Box
        pos="absolute"
        inset="0"
        bg="blackAlpha.800"
        opacity={0.9}
        zIndex={0}
      />

      {/* Artistic Background */}
      <Box pos="absolute" inset="0" opacity={0.3} zIndex={1}>
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

      {/* Glowing Dots */}
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
        direction={{ base: "column", md: "row" }}
        // align=""
        // bgColor={"purple"}
        justify="space-between"
        px={{ base: 6, md: 16 }}
        py={{ base: 20, md: 32 }}
        maxW="7xl"
        mx="auto"
      >
        {/* Left Section – Title */}
        <Box
          textAlign={{ base: "center", md: "left" }}
          flex="1"
          mb={{ base: 10, md: 0 }}
        >
          <Flex
            align="center"
            justify={{ base: "center", md: "flex-start" }}
            mb={6}
          >
            <Heart size={40} color="red" className="animate-pulse" />
            <Heading
              fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
              fontWeight="bold"
              mx={4}
              lineHeight="1.1"
              color="white"
            >
              <span style={{ color: "grey" }}>LOGOS</span> & He
              <span style={{ color: "red", fontStyle: "italic" }}>Art</span>
            </Heading>
            <Heart size={40} color="red" className="animate-pulse" />
          </Flex>

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 4, md: 6 }}
            mb={{ base: 8, md: 12 }}
            align="center"
            justify={{ base: "center", md: "flex-start" }}
            fontSize={fontSize}
            color={"whiteAlpha.800"}
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
              <span>October 11, 2025 11AM</span>
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
          </Stack>
        </Box>

        {/* Right Section – Description and Buttons */}
        <Box flex="1" color="white" pl={{ md: 12 }}>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            mb={2}
            color="gray.300"
            lineHeight="taller"
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

          <Stack direction={{ base: "column", sm: "row" }} spacing={6}>
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
        </Box>
      </Flex>

      {/* Scroll Indicator */}
      {/* <MotionFlex
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
      </MotionFlex> */}
    </Box>
  );
};

export default HeroSection;
