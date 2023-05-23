import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatform();
  const { gameQuery, setPlatformName, setPlatformID } = useGameQueryStore();

  const clickHandle = (selectedPlatform: string, platformID: number) => {
    setPlatformName(selectedPlatform);
    setPlatformID(platformID);
  };
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {gameQuery.selectedPlatform ? gameQuery.selectedPlatform : "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            as={Button}
            key={platform.id}
            onClick={() => clickHandle(platform.name, platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
