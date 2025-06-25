import {
  Box,
  Image,
  Text,
  Heading,
  useMediaQuery,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import silhouette from "../assets/images/silhouette-square.jpg";

const MotionBox = motion(Box);

const panelists = [
  {
    name: "Coming Soon",
    title: "Coming Soon",
    image: silhouette,
  },
  {
    name: "Coming Soon",
    title: "Coming Soon",
    image: silhouette,
  },
  {
    name: "Coming Soon",
    title: "Coming Soon",
    image: silhouette,
  },
  // {
  //   name: "Coming Soon",
  //   title: "Coming Soon",
  //   image: silhouette,
  // },
  // {
  //   name: "Coming Soon",
  //   title: "Coming Soon",
  //   image: silhouette,
  // },
];

const PanelistsSection = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box
      w="100%"
      // bg="black"
      py={{ base: 16, md: 20 }}
      px={{ base: 4, md: 10 }}
      id="panelists"
    >
      <Heading
        fontFamily={"secondary"}
        textAlign="center"
        mb={10}
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="bold"
        color="yellow.400"
      >
        Meet The Panelists
      </Heading>

      <SimpleGrid
        columns={{ base: 2, md: 3 }}
        spacing={4}
        justifyContent="center"
        alignItems={"center"}
      >
        {panelists.map((panelist, index) => (
          <MotionBox
            key={index}
            // bg="white"
            boxShadow="lg"
            // p={6}
            w="100%"
            // maxW="240px"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              y: -5,
              boxShadow: "2xl",
            }}
            textAlign={{ base: "left", md: "center" }}
          >
            <Image
              src={panelist.image}
              alt="Coming Soon"
              boxSize="200px"
              mx="auto"
              mb={4}
              border={"1px solid #fff"}
              sx={
                isLargerThan768
                  ? {
                      filter: "grayscale(100%)",
                      transition: "filter 0.3s ease",
                      _hover: { filter: "grayscale(0%)" },
                    }
                  : {}
              }
            />
            <Text fontWeight="bold" fontSize="lg" color="white">
              {panelist.name}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {panelist.title}
            </Text>
          </MotionBox>
        ))}
      </SimpleGrid>
      {/* Overlay */}
      <Box
        pos="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="blackAlpha.800"
        zIndex={-1}
      />
    </Box>
  );
};

export default PanelistsSection;
