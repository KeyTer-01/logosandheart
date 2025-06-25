import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  useMediaQuery,
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
];

const PanelistsSection = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box
      w="100%"
      // bgGradient="linear(to-r, white, gray.50)"
      bg={"black"}
      py={{ base: 10, md: 20 }}
      px={{ base: 4, md: 10 }}
      id="panelists"
    >
      <Heading
        textAlign="center"
        mb={10}
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="bold"
        color="yellow.400"
      >
        Meet The Panelists
      </Heading>

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        gap={8}
        flexWrap="wrap"
      >
        {panelists.map((panelist, index) => (
          <MotionBox
            key={index}
            bg="white"
            borderRadius="2xl"
            boxShadow="lg"
            p={6}
            py={8}
            w="240px"
            textAlign="center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            // animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{
              y: -5,
              boxShadow: "2xl",
            }}
          >
            <Image
              src={panelist.image}
              alt="Coming Soon"
              boxSize="150px"
              mx="auto"
              mb={4}
              border="4px solid"
              borderColor="teal.200"
              borderRadius="full"
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
            <Text fontWeight="bold" fontSize="lg" color="gray.800">
              {panelist.name}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {panelist.title}
            </Text>
          </MotionBox>
        ))}
      </Flex>
    </Box>
  );
};

export default PanelistsSection;
