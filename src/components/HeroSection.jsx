import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import bgImage from "../assets/images/dark-bg.jpg";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <Flex
      pos="relative" // <-- Make container relative so overlay is properly positioned
      bg="black"
      minH="100vh"
      w="100%"
      color="white"
      flexDirection={{ base: "column" }}
      p={8}
      justifyContent="center"
      alignItems={{ base: "flex-start", md: "center" }}
      gap={4}
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
        bg="blackAlpha.800"
        zIndex={0}
      />

      <Text fontSize={{ base: "4xl", md: "7xl" }} fontWeight={700} zIndex={1}>
        LOGOS & he
        <span style={{ color: "red", fontStyle: "italic" }}>ART</span>
      </Text>

      <Flex
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
        >
          Become a Sponsor
        </Button>
      </Flex>

      <Text
        fontSize={{ base: "lg", md: "xl" }}
        mb={2}
        color="gray.300"
        w={{ base: "100%", md: "50%" }}
        textAlign={{ base: "left", md: "center" }}
        zIndex={1}
      >
        LOGOS & heART 1.0 is a faith-based exhibition that transcends a mere
        event, it is a revelation of faith. This year&apos;s theme is:
      </Text>

      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        mb={8}
        color="yellow.400"
        fontWeight="bold"
        zIndex={1}
      >
        FAITH WILL SAVE US
      </Text>
    </Flex>
  );
};

export default HeroSection;
