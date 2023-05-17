import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Probs {
  onSearch: (userInput: string) => void;
}

const NavBar = ({ onSearch }: Probs) => {
  const serchInputHandle = (userInput: string) => {
    onSearch(userInput);
  };
  return (
    <HStack padding="0px 10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onClick={(userInput) => serchInputHandle(userInput)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
