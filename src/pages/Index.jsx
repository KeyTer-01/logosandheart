import { Flex } from "@chakra-ui/react";
import HeroSection from "../components/HeroSection";
// import bgImage from "../assets/images/tech-bg.jpg";

const Index = () => {
  return (
    <>
      <Flex
        minH="100vh"
        position="relative"
        width={"100vw"}
        // color="white"
        flexDirection={"column"}
        // alignItems={"center"}
        // justifyContent={"flex-end"}
      >
        <HeroSection />
      </Flex>
    </>
  );
};

export default Index;
