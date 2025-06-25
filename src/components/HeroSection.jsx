import { Box, Button, Flex, Text } from "@chakra-ui/react";
import bgImage from "../assets/images/dark-bg.jpg";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <Flex
        bg="black"
        minH={"100vh"}
        w={"100%"}
        color={"white"}
        flexDirection={{ base: "column" }}
        p={8}
        justifyContent={"center"}
        alignItems={{ base: "flex-start", md: "center" }}
        gap={4}
        overflow="hidden"
        bgImage={`url(${bgImage})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        zIndex={-1}
      >
        {/* Overlay */}
        <Box
          pos="absolute"
          inset="0"
          bg="blackAlpha.800"
          opacity={0.9}
          zIndex={-1}
        />
        <Text fontSize={{ base: "4xl", md: "7xl" }} fontWeight={700}>
          LOGOS & he
          <span style={{ color: "red", fontStyle: "italic" }}>ART</span>
        </Text>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          width={{ base: "100%", md: "50%" }}
          gap={4}
          alignItems={{ base: "flex-start" }}
        >
          <Button
            w={"100%"}
            variant={"solid"}
            bg={"white"}
            color={"black"}
            gap={1}
          >
            Get a Ticket <ArrowUpRight size={20} />
          </Button>
          <Button w={"100%"} variant={"outline"} color={"white"}>
            Become a Sponsor
          </Button>
        </Flex>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          mb={2}
          color="gray.300"
          w={{ base: "100%", md: "50%" }}
          textAlign={{ base: "left", md: "center" }}
        >
          LOGOS & heART 1.0 is a faith-based exhibition that transcends a mere
          event, it is a revelation of faith. This year&apos;s theme is:
        </Text>
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          mb={8}
          color="yellow.400"
          fontWeight="bold"
        >
          FAITH WILL SAVE US
        </Text>
      </Flex>
    </>
  );
};

export default HeroSection;
