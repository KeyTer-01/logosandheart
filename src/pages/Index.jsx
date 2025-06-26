import { Flex } from "@chakra-ui/react";
// import HeroSection from "../components/HeroSection";
import PanelistsSection from "../components/PanelistsSection";
import GuestSpeakerSection from "../components/GuestSpeakerSection";
import TheStorySection from "../components/TheStorySection";
import WhatToExpectSection from "../components/WhatToExpectSection";
import TheGoalSection from "../components/TheGoalSection";
import EventDetailsSection from "../components/EventDetailsSection";
// import CTAsSection from "../components/CTAsSection";
import GetInTouchSection from "../components/GetInTouchSection";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CallForArtists from "../components/CallForArtists";

const Index = () => {
  return (
    <Flex minH="100vh" position="relative" flexDirection="column">
      <Navbar />
      <HeroSection />
      <TheStorySection />
      <CallForArtists />
      <PanelistsSection />
      <GuestSpeakerSection />
      <WhatToExpectSection />
      <TheGoalSection />
      <EventDetailsSection />
      {/* <CTAsSection /> */}
      <GetInTouchSection />
    </Flex>
  );
};

export default Index;
