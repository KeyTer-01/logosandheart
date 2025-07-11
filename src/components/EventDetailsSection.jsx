import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Button,
  Icon,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { LocateFixed } from "lucide-react";
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
      overflow="hidden"
      zIndex={5}
    >
      {/* Mobile Note (positioned in flow on mobile) */}
      {isMobile && (
        <Text
          fontSize="sm"
          fontFamily="mono"
          color="yellow.400"
          textAlign="left"
          mb={6}
        >
          Admission is free, <br />
          but registration is compulsory.
        </Text>
      )}

      {/* Main Date Info */}
      <VStack align="flex-start" spacing={2} mb={10}>
        <Heading fontSize={{ base: "3xl", md: "6xl" }} fontWeight="light">
          OCT 11, 2025
        </Heading>
        <Text fontSize={{ base: "md", md: "xl" }} color="gray.300">
          SATURDAY • 11:00 AM
        </Text>
      </VStack>

      {/* Buttons */}
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        mb={10}
        width="100%"
      >
        <Button
          leftIcon={<Icon as={LocateFixed} />}
          variant="outline"
          colorScheme="white"
          opacity={0.8}
          fontFamily="mono"
          width={{ base: "100%", md: "auto" }}
        >
          View on Map
        </Button>
        <Button
          leftIcon={<Icon as={FaRegCalendarAlt} />}
          variant="outline"
          colorScheme="white"
          opacity={0.8}
          fontFamily="mono"
          width={{ base: "100%", md: "auto" }}
        >
          Add to Calendar
        </Button>
      </Stack>

      {/* Location Text */}
      <Box mt={12}>
        <Text
          fontSize={{ base: "md", md: "2xl" }}
          textAlign={{ base: "left", md: "right" }}
          whiteSpace="pre-line"
        >
          SOLUTION ARENA BY{"\n"}ONIPANU, BUSTOP, LAGOS
        </Text>
      </Box>

      {/* Desktop Top-right Note */}
      {!isMobile && (
        <Text
          position="absolute"
          top={{ md: 6 }}
          right={{ md: 20 }}
          fontSize="sm"
          fontFamily="mono"
          color="yellow.400"
          textAlign="right"
          zIndex={99}
        >
          Admission is free, <br />
          but registration is compulsory.
        </Text>
      )}

      {/* Top Gradient Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="200px"
        bgGradient="linear(to-t, transparent, blackAlpha.800)"
        zIndex={-1}
      />

      {/* Bottom Gradient Overlay */}
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
