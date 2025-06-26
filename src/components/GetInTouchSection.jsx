import {
  Box,
  Heading,
  Text,
  Stack,
  HStack,
  Icon,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Phone, Mail } from "lucide-react";

const contacts = [
  { name: "Ebi", number: "08035219501" },
  { name: "Betty", number: "08130399503" },
  { name: "Semilogo", number: "08106976585" },
  { name: "Demilade", number: "09095065087" },
];

const GetInTouchSection = () => {
  const fontSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Box id="contact" py={20} px={6} bg="gray.900" color="white">
      <Heading
        mb={4}
        textAlign="center"
        fontSize={{ base: "2xl", md: "4xl" }}
        color="red.400"
      >
        Get In Touch
      </Heading>
      <Text textAlign="center" mb={10} color="gray.300" fontSize="md">
        We&apos;d love to hear from you — reach out to any of our team members
        below:
      </Text>

      <Stack spacing={4} align="center">
        {contacts.map((contact, i) => (
          <HStack
            key={i}
            spacing={4}
            px={6}
            py={3}
            bg="gray.800"
            borderRadius="xl"
            boxShadow="sm"
            w={{ base: "full", sm: "auto" }}
          >
            <Icon as={Phone} color="red.300" boxSize={5} />
            <Text fontSize={fontSize} fontWeight="medium">
              {contact.name} —
              <Link
                href={`tel:${contact.number}`}
                color="red.300"
                ml={1}
                _hover={{ textDecoration: "underline" }}
              >
                {contact.number}
              </Link>
            </Text>
          </HStack>
        ))}
      </Stack>

      <HStack justify="center" mt={10}>
        <Icon as={Mail} color="red.300" boxSize={5} />
        <Text fontSize="md">
          Or email us at{" "}
          <Link
            href="mailto:logosheart144@gmail.com"
            color="red.300"
            fontWeight="medium"
            _hover={{ textDecoration: "underline" }}
          >
            logosheart144@gmail.com
          </Link>
        </Text>
      </HStack>
    </Box>
  );
};

export default GetInTouchSection;
