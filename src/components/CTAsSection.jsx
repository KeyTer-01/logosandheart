import {
  Box,
  Heading,
  Stack,
  Button,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ShoppingBag, HeartHandshake, Paintbrush2 } from "lucide-react";

const MotionButton = motion(Button);

const ctaItems = [
  // {
  //   label: "Register Now",
  //   icon: <UserPlus size={20} />,
  //   link: "https://linktr.ee/logosandheart",
  //   bg: "#ba0404",
  // },
  {
    label: "Become a Vendor",
    icon: <ShoppingBag size={20} />,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe4VBnfcRFQRterJQ7Wmor-W1lPRtyvoVpWhOK3d4EkEIUe8Q/viewform?usp=header",
    bg: "#454545",
  },
  {
    label: "Volunteer",
    icon: <HeartHandshake size={20} />,
    link: "https://linktr.ee/logosandheart",
    bg: "#ad8a02",
  },
  {
    label: "Call for Artists",
    icon: <Paintbrush2 size={20} />,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdG7eZ2xdwg0dOMX8DBpDeGwu1dPX2unUWoaxbkQGkBWWaLow/viewform?usp=header",
    bg: "#ba0404",
  },
];

const CTAsSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box id="cta" py={20} px={6} bg="blackAlpha.900" textAlign="center">
      <Heading
        mb={4}
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="bold"
        color="#ffcb04"
      >
        Get Involved
      </Heading>
      <Text mb={10} fontSize={{ base: "md", md: "lg" }} color="gray.400">
        Join the movement. Be a part of something inspiring — create, connect,
        and contribute.
      </Text>

      <Stack
        direction={{ base: "column", sm: "row" }}
        spacing={6}
        justify="center"
        align="center"
        flexWrap="wrap"
      >
        {ctaItems.map((cta) => (
          <MotionButton
            key={cta.label}
            as="a"
            href={cta.link}
            target="_blank"
            rel="noopener noreferrer"
            // colorScheme="red"
            variant="solid"
            bgColor={cta.bg}
            size="lg"
            px={8}
            py={6}
            leftIcon={cta.icon}
            borderRadius="xl"
            boxShadow="md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            minW={isMobile ? "full" : "auto"}
            color={"white"}
          >
            {cta.label}
          </MotionButton>
        ))}
      </Stack>
    </Box>
  );
};

export default CTAsSection;
