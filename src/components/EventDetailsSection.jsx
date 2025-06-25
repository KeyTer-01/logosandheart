import { Box, Heading, Stack, Text } from "@chakra-ui/react";

const EventDetailsSection = () => (
  <Box id="details" py={16} px={6} bg="white">
    <Heading textAlign="center" mb={10} fontSize={{ base: "2xl", md: "4xl" }}>
      Event Details
    </Heading>
    <Stack
      spacing={5}
      textAlign="center"
      fontSize="md"
      color="gray.700"
      maxW="2xl"
      mx="auto"
    >
      <Text>
        📅 <strong>Date:</strong> Saturday, October 11, 2025
      </Text>
      <Text>
        🕚 <strong>Time:</strong> 11:00 AM
      </Text>
      <Text>
        📍 <strong>Venue:</strong> Solution Arena, 156 Ikorodu Road, Lagos
      </Text>
      <Text>
        📧 <strong>Email:</strong> logosheart144@gmail.com
      </Text>
      <Text>
        This event is both spiritual and cultural — deeply intentional, deeply
        creative, and deeply transformative.
      </Text>
    </Stack>
  </Box>
);

export default EventDetailsSection;
