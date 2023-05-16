import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { Icon } from "@chakra-ui/react";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import {
  FaWindows,
  FaAndroid,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const icons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
  };
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack marginTop="10px" alignItems="center">
          {game.parent_platforms.map((platform) => (
            <Icon
              color="gray.500"
              fontSize="1.1rem"
              as={icons[platform.platform.slug]}
            />
          ))}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
