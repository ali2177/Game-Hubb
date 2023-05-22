import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";

interface Probs {
  onSelcetedPlatform: (
    selectedPlatform: string | null,
    selectedPlatformID: number | null
  ) => void;

  platformName: string | null;
}

const PlatformSelector = ({ onSelcetedPlatform, platformName }: Probs) => {
  const { data, error, isLoading } = usePlatform();

  const clickHandle = (
    selectedPlatform: string | null,
    platformID: number | null
  ) => {
    onSelcetedPlatform(selectedPlatform, platformID);
  };
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformName ? platformName : "Platforms"}
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
