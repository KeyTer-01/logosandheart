import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import artistImage from "../assets/images/artist-image.png";
import { motion } from "framer-motion";
import { HeartHandshake, Paintbrush2, ShoppingBag } from "lucide-react";

const MotionButton = motion(Button);
const ctaItems = [
  // {
  //   label: "Register Now",
  //   icon: <UserPlus size={20} />,
  //   link: "https://linktr.ee/logosandheart",
  //   bg: "#ba0404",
  // },
  {
    label: "Call for Artists",
    icon: <Paintbrush2 size={20} />,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdG7eZ2xdwg0dOMX8DBpDeGwu1dPX2unUWoaxbkQGkBWWaLow/viewform?usp=header",
    bg: "#ba0404",
  },
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
];
const CallForArtists = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <Flex
        id="cta"
        flexDirection={"column"}
        alignItems={"center"}
        color={"#000"}
        bg={"white"}
        px={6}
        py={16}
      >
        <Text fontFamily={"secondary"} fontSize={40} fontWeight={700}>
          Call for Artists
        </Text>
        <Flex
          color={"#000"}
          //   bg={"yellow"}
          w={"100%"}
          justifyContent={"center"}
          minH={"30vh"}
          gap={2}
          alignItems={"center"}
          //   px={{ base: 0, md: 24 }}
        >
          <Stack w={{ base: "80%", md: "30%" }}>
            <Text
              mb={2}
              fontSize={{ base: "sm", md: "lg" }}
              lineHeight={1.2}
              color="gray.700"
            >
              Join the movement. Be a part of something inspiring — create,
              connect, and contribute.
            </Text>
            <Stack
              direction={{ base: "column" }}
              spacing={4}
              justify="center"
              //   align="center"
              flexWrap="wrap"
              //   w={"100%"}
              //   bg={"orange"}
            >
              {ctaItems.map((cta, i) => (
                <MotionButton
                  key={cta.label}
                  as="a"
                  href={cta.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                  borderColor={cta.bg}
                  //   px={8}
                  //   py={6}
                  leftIcon={cta.icon}
                  borderRadius="xl"
                  boxShadow="md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  minW={isMobile ? "full" : "auto"}
                  color={cta.bg}
                >
                  {cta.label}
                </MotionButton>
              ))}
            </Stack>
          </Stack>
          <Box w={{ base: "50%", md: "30%" }}>
            <Image
              src={artistImage}
              alt="artist"
              w={{ base: "100%", md: "60%" }}
              objectFit="contain"
            />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default CallForArtists;
