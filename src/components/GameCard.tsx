import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../entities/Game";
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
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";

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
    <Card
      _hover={{ transform: "scale(1.1)", overflow: "hidden" }}
      borderRadius="10px"
      overflow="hidden"
    >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack
          marginBottom="10px"
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack>
            {game.parent_platforms.map((platform) => (
              <Icon
                color="gray.500"
                fontSize="1.1rem"
                key={platform.platform.id}
                as={icons[platform.platform.slug]}
              />
            ))}
          </HStack>
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="1.2rem">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
