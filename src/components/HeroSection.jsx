import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import bgVideo from "../assets/videos/bg-video.mp4";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
// import logoIcon from "../assets/images/logo-icon.png"; // Optional icon

const MotionText = motion(Text);

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);
  return (
    <Flex
      as={motion.div}
      initial="hidden"
      animate="show"
      position="relative"
      minH="100vh"
      w="100%"
      color="white"
      flexDirection="column"
      justifyContent="center"
      px={{ base: 4, sm: 6, md: 10 }}
      py={{ base: 8, md: 0 }}
      overflow="hidden"
    >
      {/* Solid base layer for blend */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="blue.700"
        zIndex={0}
      />

      {/* Video with blend mode */}
      <Box
        as="video"
        ref={videoRef}
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        objectFit="cover"
        mixBlendMode="overlay"
        zIndex={0}
      />

      {/* Headings */}
      <Stack
        spacing={0}
        zIndex={1}
        mb={{ base: 6, md: 4 }}
        textAlign={{ base: "center", md: "left" }}
      >
        <MotionText
          variants={fadeInUp}
          fontSize={{ base: "4xl", sm: "4xl", md: "6xl", lg: "7xl" }}
          textTransform="uppercase"
          letterSpacing={1}
          lineHeight="1.1"
        >
          A FAITH BASED
        </MotionText>
        <MotionText
          variants={fadeInUp}
          fontSize={{ base: "4xl", sm: "4xl", md: "6xl", lg: "7xl" }}
          textTransform="uppercase"
          letterSpacing="widest"
          lineHeight="1.1"
        >
          EXHIBITION
        </MotionText>
      </Stack>

      {/* Description */}
      <MotionText
        variants={fadeInUp}
        mt={6}
        fontSize={{ base: "sm", sm: "md", md: "lg" }}
        maxW={{ base: "100%", md: "720px" }}
        textAlign={{ base: "center", md: "left" }}
        color="#CBD5E0"
        zIndex={1}
        mx={{ base: "auto", md: "0" }}
      >
        LOGOS & heART is where the Word meets creativity. An immersive
        faith-based art experience that brings Scripture to life through Arts,
        visual storytelling, music, performance, and conversation. At its heart,
        it&apos;s a call to live by faith — to see, feel, and believe again.
        Welcome to LOGOS & heART 1.0
      </MotionText>

      {/* Bottom Left Theme */}
      <Flex
        pos="absolute"
        left={{ base: 4, sm: 6 }}
        bottom={{ base: 20, sm: 6 }}
        align="center"
        gap={4}
        zIndex={2}
        flexDirection="column"
        alignItems="flex-start"
        textAlign="left"
      >
        {/* <Image src={logoIcon} alt="Theme Icon" boxSize="40px" /> */}
        <Box>
          <Text
            fontSize={{ base: "xs", sm: "sm" }}
            color="yellow.400"
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            FAITH WILL SAVE US
          </Text>
          <Text fontSize="xs" color="yellow.300">
            — THEME
          </Text>
        </Box>
      </Flex>

      {/* Bottom Right CTA */}
      <Button
        pos="absolute"
        right={{ base: 4, sm: 6 }}
        bottom={{ base: 4, sm: 6 }}
        // variant="ghost"
        fontSize={{ base: "2xs", sm: "xs" }}
        color="white"
        borderRadius={0}
        letterSpacing={0.8}
        px={{ base: 4, sm: 6 }}
        py={6}
        borderBottom="2px solid #FFCB04"
        _hover={{ bg: "whiteAlpha.100" }}
        zIndex={2}
        textAlign="center"
        maxW={{ base: "90%", sm: "none" }}
        bgColor={"#FFFFFF0A"}
        fontWeight={"light"}
      >
        SHOWING JESUS THROUGH ART
      </Button>

      {/* Bottom gradient for contrast */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height="350px"
        zIndex={0}
        bgGradient="linear(to-t, blackAlpha.900, transparent)"
      />
    </Flex>
  );
};

export default HeroSection;
