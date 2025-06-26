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
import anchorImage from "../assets/images/anchor-image.png";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const storyItems = [
  {
    title: "FAITH MADE US",
    description:
      "A visual journey into creation, the Word, the beginnings of everything, and Man (spirit, soul, body)",
    bg: "linear(to-br, red.800, red.500)",
    glow: "0 0 10px rgba(239, 68, 68, 0.6)",
    color: "darkred",
    image: anchorImage,
  },
  {
    title: "FAITH HAS BEEN SAVING US",
    description:
      "Stories of those who walked by faith, showcasing victories and struggles (Faith without works and Faith by works)",
    bg: "linear(to-br, green.800, green.500)",
    glow: "0 0 10px rgba(72, 187, 120, 0.6)",
    color: "darkred",
    image: anchorImage,
  },
  {
    title: "FAITH WILL SAVE US",
    description:
      "A call to live by faith now, no matter the darkness, trusting God's word to carry us in this present time",
    bg: "linear(to-br, yellow.600, yellow.400)",
    glow: "0 0 10px rgba(251, 191, 36, 0.5)",
    color: "darkred",
    image: anchorImage,
  },
];

const TheStorySection = () => {
  const cardPadding = useBreakpointValue({ base: 6, md: 8 });

  return (
    <Box
      as="section"
      pos="relative"
      id="story"
      // bg="#ffcb05"
      bg={"whiteAlpha.900"}
      color="black"
      px={{ base: 4, md: 10 }}
      pb={{ base: 5, md: 0 }}
      pt={{ base: 16, md: 28 }}
      overflow="hidden"
      // px={4}
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
        animate={{
          rotate: [-5, 5, -5],
        }}
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
          The Story We&apos;re Telling
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.800">
          Through curated artworks, we will explore faith&apos;s narrative in
          three movements:
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
            // bgGradient={item.bg}
            // boxShadow={item.glow}
            border={"1px solid  "}
            borderColor={item.color}
            p={cardPadding}
            textAlign="left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Flex alignItems={"flex-start"} gap={2}>
              <Text
                fontFamily={"secondary"}
                fontSize="xl"
                fontWeight={700}
                mb={3}
                color={"darkRed"}
                // bg={"red"}
              >
                {item.title}
              </Text>
              {/* <Box w={6}>
                <Image src={item.image} alt="anchor" />
              </Box> */}
            </Flex>

            <Text fontSize="md" color="black">
              {item.description}
            </Text>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TheStorySection;
