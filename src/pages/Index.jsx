import { Flex } from "@chakra-ui/react";
import HeroSection from "../components/HeroSection";
import PanelistsSection from "../components/PanelistsSection";
// import bgImage from "../assets/images/tech-bg.jpg";

const Index = () => {
  return (
    <>
      <Flex
        minH="100vh"
        position="relative"
        // width={"100%"}
        // color="white"
        flexDirection={"column"}
        // alignItems={"center"}
        // justifyContent={"flex-end"}
      >
        <HeroSection />
        <PanelistsSection />
      </Flex>
    </>
  );
};

export default Index;
