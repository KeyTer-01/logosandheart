import {
  Box,
  Heading,
  Stack,
  Text,
  HStack,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { CalendarDays, Clock, MapPin } from "lucide-react";

const details = [
  {
    label: "Date",
    value: "Saturday, October 11, 2025",
    icon: CalendarDays,
  },
  {
    label: "Time",
    value: "11:00 AM",
    icon: Clock,
  },
  {
    label: "Venue",
    value: "Solution Arena, 156 Ikorodu Road, Lagos",
    icon: MapPin,
  },
  // {
  //   label: "Email",
  //   value: "logosheart144@gmail.com",
  //   icon: Mail,
  // },
];

const EventDetailsSection = () => {
  const fontSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Box id="details" py={20} px={6} bg="white">
      <Heading
        textAlign="center"
        mb={10}
        fontSize={{ base: "2xl", md: "4xl" }}
        color="red.700"
      >
        Event Details
      </Heading>

      <Stack spacing={6} maxW="2xl" mx="auto">
        {details.map(({ label, value, icon }, idx) => (
          <HStack
            key={idx}
            spacing={4}
            align="flex-start"
            p={4}
            bg="gray.50"
            borderRadius="md"
            boxShadow="sm"
          >
            <Icon as={icon} boxSize={6} color="red.400" />
            <Text fontSize={fontSize} color="gray.700">
              <strong>{label}:</strong> {value}
            </Text>
          </HStack>
        ))}
      </Stack>
    </Box>
  );
};

export default EventDetailsSection;
