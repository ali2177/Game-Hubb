import { HStack, Image } from "@chakra-ui/react";
import logo from "/src/assets/logo.svg";

import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="0px 10px">
      <Link to="/">
        <Image marginTop={2} src={logo} boxSize="50px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
