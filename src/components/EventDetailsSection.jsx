import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Button,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  // CalendarDays, MapPin,
  LocateFixed,
} from "lucide-react";
import { FaRegCalendarAlt } from "react-icons/fa";

const EventDetailsSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      id="details"
      py={{ base: 12, md: 20 }}
      px={{ base: 6, md: 20 }}
      bgGradient="radial(#020420, #010314)"
      color="white"
      position="relative"
      zIndex={-2}
    >
      {/* Top-right Note */}
      <Text
        position="absolute"
        top={{ base: 4, md: 6 }}
        right={{ base: 4, md: 20 }}
        fontSize="sm"
        fontFamily="mono"
        color="yellow.400"
        textAlign={"right"}
      >
        Admission is free, <br />
        but registration is compulsory.
      </Text>

      {/* Main Date Info */}
      <VStack align="flex-start" spacing={2} mb={10}>
        <Heading fontSize={{ base: "3xl", md: "6xl" }} fontWeight="light">
          OCT 11, 2025
        </Heading>
        <Text
          fontSize={{ base: "md", md: "xl" }}
          // fontFamily="mono"
          color="gray.300"
        >
          SATURDAY • 11:00 AM
        </Text>
      </VStack>

      {/* Buttons */}
      <HStack spacing={4} mb={10}>
        <Button
          leftIcon={<Icon as={LocateFixed} />}
          variant="outline"
          colorScheme="whiteAlpha"
          fontFamily="mono"
        >
          View on Map
        </Button>
        <Button
          leftIcon={<Icon as={FaRegCalendarAlt} />}
          variant="outline"
          colorScheme="whiteAlpha"
          fontFamily="mono"
        >
          Add to Calendar
        </Button>
      </HStack>

      {/* Location Bottom-Right */}
      <Box mt={12} zIndex={4}>
        <Text
          // fontFamily="mono"
          fontSize={{ base: "md", md: "2xl" }}
          textAlign={isMobile ? "left" : "right"}
          whiteSpace="pre-line"
          zIndex={4}
        >
          SOLUTION ARENA BY{"\n"}ONIPANU, BUSTOP, LAGOS
        </Text>
      </Box>

      {/* Top Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="200px"
        bgGradient="linear(to-t,  transparent, blackAlpha.800)"
        zIndex={-1}
      />
      {/* Bottom Overlay */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height="200px"
        bgGradient="linear(to-t, blackAlpha.900, transparent)"
        zIndex={-1}
      />
    </Box>
  );
};

export default EventDetailsSection;
