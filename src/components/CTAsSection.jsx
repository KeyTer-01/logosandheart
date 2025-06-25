import { Box, Heading, Stack, Button } from "@chakra-ui/react";

const CTAsSection = () => (
  <Box id="cta" py={16} px={6} bg="gray.50" textAlign="center">
    <Heading mb={8} fontSize={{ base: "2xl", md: "4xl" }}>
      Get Involved
    </Heading>
    <Stack
      direction={{ base: "column", sm: "row" }}
      spacing={6}
      justify="center"
    >
      <CTAButton label="Register Now" link="https://linktr.ee/logosandheart" />
      <CTAButton
        label="Become a Vendor"
        link="https://linktr.ee/logosandheart"
      />
      <CTAButton label="Volunteer" link="https://linktr.ee/logosandheart" />
      <CTAButton
        label="Call for Artists"
        link="https://linktr.ee/logosandheart"
      />
    </Stack>
  </Box>
);

const CTAButton = ({ label, link }) => (
  <Button
    as="a"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    colorScheme="red"
    variant="outline"
    size="lg"
    px={8}
    py={4}
    rounded="full"
    _hover={{ bg: "red.500", color: "white" }}
  >
    {label}
  </Button>
);

export default CTAsSection;
