import { Flex, Image } from "@chakra-ui/react";
import artistImage from "../assets/images/artist-image.png";

const CallForArtists = () => {
  return (
    <>
      <Flex
        color={"#000"}
        bg={"white"}
        justifyContent={"space-between"}
        py={12}
      >
        Call for Artists
        <Image w={"30%"} src={artistImage} alt="artist" />
      </Flex>
    </>
  );
};

export default CallForArtists;
