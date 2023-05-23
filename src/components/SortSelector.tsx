import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const { gameQuery, setSortOrder } = useGameQueryStore();
  const sortOrders = [
    { value: "aa", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "rating", label: "Average rating" },
  ];

  const sortOrderHandle = (sortOrder: string) => {
    setSortOrder(sortOrder);
  };

  const currentSortOrder = sortOrders.find(
    (order) => order.value === gameQuery.sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {gameQuery.sortOrder ? currentSortOrder?.label : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            as={Button}
            value={sortOrder.value}
            key={sortOrder.label}
            onClick={() => sortOrderHandle(sortOrder.value)}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
