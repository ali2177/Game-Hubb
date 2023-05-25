import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenShot from "../hooks/useScreenShot";

interface Props {
  gameID: string;
}

const GameScreenShot = ({ gameID }: Props) => {
  const { data: images, error, isLoading } = useScreenShot(gameID);
  console.log(images?.results);
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5}>
      {images?.results.map((image) => (
        <Image src={image.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShot;
