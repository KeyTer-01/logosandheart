import { Box, Heading, Text, Image, Stack } from "@chakra-ui/react";
import silhouette from "../assets/images/silhouette-square.jpg";

const GuestSpeakerSection = () => (
  <Box id="speakers" py={16} px={{ base: 4, md: 10 }} bg="gray.50">
    <Heading textAlign="center" mb={10} fontSize={{ base: "3xl", md: "7xl" }}>
      Keynote Speaker
    </Heading>
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={10}
      align="center"
      justify="center"
    >
      <Image
        src={silhouette}
        alt="Guest Speaker"
        boxSize="240px"
        borderRadius="full"
        objectFit="cover"
        border="4px solid teal"
      />
      <Box maxW="lg" textAlign={{ base: "center", md: "left" }}>
        <Heading size="md" mb={2}>
          Coming Soon
        </Heading>
        <Text fontSize="md" color="gray.600">
          Coming soon: Our guest speaker will be announced shortly. Stay tuned
          for updates!
        </Text>
      </Box>
    </Stack>
  </Box>
);

export default GuestSpeakerSection;
