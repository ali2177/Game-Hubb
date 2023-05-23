import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const [userI, setUserI] = useState("");
  const setUserInput = useGameQueryStore((s) => s.setUserInput);

  const clickHandle = () => {
    setUserInput(userI);
  };
  return (
    <InputGroup>
      <InputLeftElement
        cursor="pointer"
        children={<BsSearch />}
        onClick={clickHandle}
      />
      <Input
        borderRadius="20px"
        placeholder="Search for games ..."
        variant="filled"
        value={userI}
        onChange={(e) => setUserI(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
