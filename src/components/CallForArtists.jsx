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
import cfaImage from "../assets/images/cfa.png";
import { motion } from "framer-motion";
import { HeartHandshake, Paintbrush2, ShoppingBag } from "lucide-react";

const MotionButton = motion(Button);

const ctaItems = [
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
    <Flex
      id="cta"
      flexDirection="column"
      alignItems="center"
      color="#000"
      bg="white"
      px={{ base: 4, md: 8 }}
      py={{ base: 16, md: 16 }}
    >
      {/* <Flex
        alignItems={"center"}
        justifyContent={"center"}
        w={"100%"}
        gap={1}
      >
        <Flex
          flex={1}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            textAlign="center"
          >
            Call for
          </Text>
        </Flex>
        <Box flex={1}>
          <Image src={cfaImage} alt="cfa" w={{ base: "50%" }} />
        </Box>
      </Flex> */}

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
        w="100%"
        maxW="1200px"
        gap={{ base: 10, md: 16 }}
      >
        {/* Text and Buttons */}
        <Stack w={{ base: "100%", md: "45%" }} spacing={6}>
          <Box>
            <Text
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              // textAlign="center"
              //   lineHeight={1}
            >
              Call for
            </Text>
            <Flex alignItems={"center"}>
              {/* <Box> */}
              <Image src={cfaImage} alt="cfa" w={{ base: "50%" }} />
              {/* <Text
                fontFamily={"secondary"}
                fontSize={48}
                fontWeight={600}
                mb={2}
              >
                s
              </Text> */}
              {/* </Box> */}
            </Flex>
          </Box>

          <Text
            fontSize={{ base: "sm", md: "lg" }}
            color="gray.700"
            lineHeight="1.4"
          >
            Join the movement. Be a part of something inspiring — create,
            connect, and contribute.
          </Text>

          <Stack spacing={4}>
            {ctaItems.map((cta) => (
              <MotionButton
                key={cta.label}
                as="a"
                href={cta.link}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                borderColor={cta.bg}
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

        {/* Image */}
        <Box w={{ base: "80%", md: "20%" }} maxW="400px">
          <Image src={artistImage} alt="artist" w="100%" objectFit="contain" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default CallForArtists;
