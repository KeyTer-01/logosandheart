import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  useBreakpointValue,
  Flex,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import anchorImage from "../assets/images/anchor-image.png";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const storyItems = [
  {
    title: "FAITH MADE US",
    description:
      "A visual journey into creation, the Word, the beginnings of everything, and Man (spirit, soul, body)",
    color: "darkred",
  },
  {
    title: "FAITH HAS BEEN SAVING US",
    description:
      "Stories of those who walked by faith, showcasing victories and struggles (Faith without works and Faith by works)",
    color: "darkred",
  },
  {
    title: "FAITH WILL SAVE US",
    description:
      "A call to live by faith now, no matter the darkness, trusting God's word to carry us in this present time",
    color: "darkred",
  },
];

const TheStorySection = () => {
  const cardPadding = useBreakpointValue({ base: 6, md: 8 });

  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [];

    // Title done -> Subtitle
    timers.push(setTimeout(() => setStep(1), 1000));
    // Subtitle done -> First card
    timers.push(setTimeout(() => setStep(2), 3000));
    // Next cards
    storyItems.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(3 + i), 3200 + i * 4000));
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <Box
      as="section"
      pos="relative"
      id="story"
      bg="whiteAlpha.900"
      color="black"
      px={{ base: 4, md: 10 }}
      pb={{ base: 5, md: 10 }}
      pt={{ base: 16, md: 28 }}
      overflow="hidden"
      minH={{ base: "90vh", md: 0 }}
    >
      <MotionImage
        src={anchorImage}
        alt="anchor background"
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        opacity={0.2}
        zIndex={0}
        maxW="600px"
        filter="blur(2px)"
        pointerEvents="none"
        animate={{ rotate: [-5, 5, -5] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        display={{ base: "block", md: "none" }}
      />

      {/* Title and Subtitle */}
      <Box
        pos="relative"
        zIndex={2}
        textAlign="center"
        maxW="3xl"
        mx={{ base: 2, md: "auto" }}
        mb={4}
      >
        <Heading
          fontFamily={"secondary"}
          fontSize={{ base: "4xl", md: "5xl" }}
          mb={2}
          fontWeight={700}
          letterSpacing={-1}
        >
          {step >= 0 && (
            <Typewriter
              words={["The Story We're Telling"]}
              loop={1}
              typeSpeed={30}
              deleteSpeed={0}
              delaySpeed={800}
            />
          )}
        </Heading>

        <Text fontSize={{ base: "md", md: "lg" }} color="gray.800">
          {step >= 1 && (
            <Typewriter
              words={[
                "Through curated artworks, we will explore faith's narrative in three movements:",
              ]}
              loop={1}
              typeSpeed={20}
              deleteSpeed={0}
              delaySpeed={500}
            />
          )}
        </Text>
      </Box>

      {/* Story Cards */}
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={4}
        pos="relative"
        zIndex={2}
      >
        {storyItems.map((item, index) => (
          <MotionBox
            key={index}
            border="1px solid"
            borderColor={item.color}
            p={cardPadding}
            textAlign="left"
            initial={{ opacity: 0, y: 40 }}
            animate={step >= 3 + index ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0 }}
          >
            {step >= 3 + index && (
              <>
                <Flex alignItems="flex-start" gap={2}>
                  <Text
                    fontFamily="secondary"
                    fontSize="xl"
                    fontWeight={700}
                    mb={3}
                    color="darkRed"
                  >
                    <Typewriter
                      words={[item.title]}
                      loop={1}
                      typeSpeed={30}
                      deleteSpeed={0}
                      delaySpeed={200}
                    />
                  </Text>
                </Flex>

                <Text fontSize="md" color="black">
                  <Typewriter
                    words={[item.description]}
                    loop={1}
                    typeSpeed={20}
                    deleteSpeed={0}
                    delaySpeed={500}
                  />
                </Text>
              </>
            )}
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TheStorySection;
