import { Box, Button, Flex, Text } from "@chakra-ui/react";
import bgImage from "../assets/images/bg.png";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <Flex
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="show"
      pos="relative"
      id="home"
      minH="100vh"
      w="100%"
      color="white"
      flexDirection={{ base: "column" }}
      p={6}
      justifyContent="center"
      alignItems={{ base: "flex-start", md: "center" }}
      gap={{ base: 6, md: 10 }}
      overflow="hidden"
      bgImage={`url(${bgImage})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      {/* Overlay */}
      <Box
        pos="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="blackAlpha.600"
        zIndex={0}
      />

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
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </Box>

      <MotionText
        variants={fadeInUp}
        fontFamily={"secondary"}
        fontSize={{ base: 100, md: 140 }}
        fontWeight={600}
        zIndex={1}
        lineHeight={1}
        letterSpacing={{ base: -6, md: -8 }}
        mt={24}
      >
        <span style={{ color: "#7c7c7c" }}>LOGOS</span>{" "}
        <span style={{ color: "#ffcb04", fontSize: 70 }}>&</span> he
        <span style={{ color: "#ea0606", fontStyle: "italic" }}>ART</span>
      </MotionText>

      <MotionFlex
        variants={fadeInUp}
        flexDirection={{ base: "column", md: "row" }}
        width={{ base: "100%", md: "50%" }}
        gap={4}
        alignItems={{ base: "flex-start" }}
        zIndex={1}
      >
        <Button
          as="a"
          href="https://tix.africa/discover/logosandheart"
          target="_blank"
          rel="noopener noreferrer"
          w="100%"
          variant="solid"
          bg="white"
          color="black"
          display="flex"
          gap={2}
          // py={6}
          boxShadow="0 0 2px #ffcb04, 0 0 8px #ffcb04"
          _hover={{
            boxShadow: "0 0 5px #ffcb04, 0 0 10px #ffcb04",
            transform: "scale(1.05)",
            transition: "all 0.3s ease-in-out",
          }}
          transition="all 0.3s ease-in-out"
        >
          Get a Ticket <ArrowUpRight size={20} />
        </Button>

        <Button
          as="a"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdqUUk4RyNUytAnVlmNqBtd0P358IKZ0bP51-g04cbNnakETw/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          w="100%"
          variant="outline"
          color="white"
          _hover={{ bg: "whiteAlpha.200" }}
          py={6}
        >
          Become a Sponsor
        </Button>
      </MotionFlex>

      <MotionFlex
        variants={fadeInUp}
        flexDirection={"column"}
        alignItems={"center"}
        zIndex={1}
        textAlign={{ base: "left", md: "center" }}
      >
        <Text
          fontSize={{ base: "sm", md: "xl" }}
          mb={2}
          color="gray.300"
          w={{ base: "100%", md: "60%" }}
        >
          LOGOS & heART 1.0 is a faith-based exhibition that transcends a mere
          event, it is a revelation of faith. This year&apos;s theme is:
        </Text>

        <Text
          fontSize={{ base: "4xl", md: "4xl" }}
          mb={8}
          color="yellow.400"
          fontWeight={700}
          fontFamily={"tertiary"}
          mt={6}
          textTransform={"capitalize"}
        >
          Faith will save us
        </Text>
      </MotionFlex>
    </Flex>
  );
};

export default HeroSection;
