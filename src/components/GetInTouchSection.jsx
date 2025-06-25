import { Box, Heading, Text, Stack } from "@chakra-ui/react";

const contacts = [
  { name: "Ebi", number: "08035219501" },
  { name: "Betty", number: "08130399503" },
  { name: "Semilogo", number: "08106976585" },
  { name: "Demilade", number: "09095065087" },
];

const GetInTouchSection = () => (
  <Box id="contact" py={16} px={6} bg="gray.900" color="white">
    <Heading mb={6} textAlign="center" fontSize={{ base: "2xl", md: "4xl" }}>
      Get In Touch
    </Heading>
    <Text textAlign="center" mb={4}>
      For more information, please contact:
    </Text>
    <Stack spacing={2} textAlign="center">
      {contacts.map((c, i) => (
        <Text key={i}>
          {c.name} — {c.number}
        </Text>
      ))}
    </Stack>
    <Text textAlign="center" mt={6}>
      Or email us at <strong>logosheart144@gmail.com</strong>
    </Text>
  </Box>
);

export default GetInTouchSection;
