import { Box, Heading, Text } from "@chakra-ui/react";

const TheGoalSection = () => (
  <Box py={16} px={{ base: 4, md: 10 }} bg="gray.100">
    <Heading textAlign="center" mb={6} fontSize={{ base: "2xl", md: "4xl" }}>
      Our Goal
    </Heading>
    <Text
      textAlign="center"
      fontSize="lg"
      color="gray.700"
      maxW="3xl"
      mx="auto"
    >
      When people walk in, they should feel inspired. When they walk out, they
      should know what it means to live by faith.
      <br />
      <br />
      <strong>Admission is free, but registration is compulsory.</strong>
    </Text>
  </Box>
);

export default TheGoalSection;
