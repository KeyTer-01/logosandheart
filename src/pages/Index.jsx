import { Flex } from "@chakra-ui/react";
import PanelistsSection from "../components/PanelistsSection";
import GuestSpeakerSection from "../components/GuestSpeakerSection";
import TheStorySection from "../components/TheStorySection";
import WhatToExpectSection from "../components/WhatToExpectSection";
import TheGoalSection from "../components/TheGoalSection";
import EventDetailsSection from "../components/EventDetailsSection";
import GetInTouchSection from "../components/GetInTouchSection";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CallForArtists from "../components/CallForArtists";
import WhatIsLogos from "../components/WhatIsLogos";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Flex minH="100vh" position="relative" flexDirection="column">
      <Navbar />
      <HeroSection />
      <WhatIsLogos />
      <TheStorySection />
      <TheGoalSection />
      <WhatToExpectSection />
      <CallForArtists />
      <PanelistsSection />
      <GuestSpeakerSection />
      <EventDetailsSection />
      <GetInTouchSection />
      <Footer />
    </Flex>
  );
};

export default Index;
