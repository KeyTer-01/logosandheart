import { Box, Flex, Text, Heading, Stack, Button } from "@chakra-ui/react";
import { Calendar, MapPin, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const HeroSection = () => {
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
          animate={{ opacity: [0.8, 0.4, 0.8] }}
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
          animate={{ opacity: [0.8, 0.4, 0.8] }}
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
          animate={{ opacity: [0.8, 0.4, 0.8] }}
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
        px={4}
        py={20}
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
            Logos & HeArt
          </Heading>
          <Heart size={40} color="red" className="animate-pulse" />
        </Flex>

        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          mb={4}
          color="gray.300"
          fontWeight="light"
        >
          Where Faith Meets Creativity
        </Text>

        <Text
          fontSize={{ base: "lg", md: "xl" }}
          mb={10}
          color="gray.400"
          maxW="3xl"
          mx="auto"
          lineHeight="tall"
        >
          An extraordinary fusion of spiritual expression and artistic
          innovation. Join us for an inspiring journey through music, visual
          arts, spoken word, and divine connection.
        </Text>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={8}
          mb={12}
          align="center"
          justify="center"
          fontSize="lg"
        >
          <Flex
            align="center"
            gap={3}
            px={6}
            py={3}
            border="1px solid"
            borderColor="red.500"
            rounded="full"
            backdropFilter="blur(6px)"
            bg="whiteAlpha.100"
          >
            <Calendar color="red" size={24} />
            <span>Coming Soon</span>
          </Flex>

          <Flex
            align="center"
            gap={3}
            px={6}
            py={3}
            border="1px solid"
            borderColor="green.500"
            rounded="full"
            backdropFilter="blur(6px)"
            bg="whiteAlpha.100"
          >
            <MapPin color="green" size={24} />
            <span>Lagos, Nigeria</span>
          </Flex>

          <Flex
            align="center"
            gap={3}
            px={6}
            py={3}
            border="1px solid"
            borderColor="yellow.400"
            rounded="full"
            backdropFilter="blur(6px)"
            bg="whiteAlpha.100"
          >
            <Users color="gold" size={24} />
            <span>Faith Community</span>
          </Flex>
        </Stack>

        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing={6}
          justify="center"
        >
          <Button
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
            Join the Experience
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
