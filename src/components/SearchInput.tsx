import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

interface Probs {
  onClick: (userInput: string) => void;
}
const SearchInput = ({ onClick }: Probs) => {
  const [userInput, setUserInput] = useState("");

  const clickHandle = () => {
    onClick(userInput);
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
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
