import { Box, Heading, Text } from "@chakra-ui/react";

const TheGoalSection = () => (
  <Box id="goal" py={16} px={{ base: 4, md: 10 }} bg="#ffcb04">
    <Heading
      fontFamily={"secondary"}
      textAlign="center"
      mb={6}
      fontSize={{ base: "4xl", md: "5xl" }}
    >
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
