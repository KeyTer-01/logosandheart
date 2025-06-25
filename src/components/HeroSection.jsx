import { Button, Flex, Text } from "@chakra-ui/react";

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
      >
        <Text fontSize={{ base: "4xl", md: "7xl" }} fontWeight={700}>
          LOGOS & he
          <span style={{ color: "red", fontStyle: "italic" }}>Art</span>
        </Text>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          width={{ base: "100%", md: "60%" }}
          gap={4}
          alignItems={{ base: "flex-start" }}
        >
          <Button w={"100%"} variant={"solid"} bg={"white"} color={"black"}>
            Get a Ticket
          </Button>
          <Button w={"100%"} variant={"outline"} color={"white"}>
            Become a Sponsor
          </Button>
        </Flex>
        <Text fontSize={{ base: "lg", md: "xl" }} mb={2} color="gray.300">
          LOGOS & heART 1.0 is a faith-based exhibition that transcends a mere
          event, it is a revelation of faith. This year&apos;s theme is:
        </Text>
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          mb={8}
          color="gray.100"
          fontWeight="bold"
        >
          FAITH WILL SAVE US
        </Text>
      </Flex>
    </>
  );
};

export default HeroSection;
