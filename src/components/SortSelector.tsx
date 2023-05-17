import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Probs {
  onSlectedOrder: (selectedOrder: string) => void;
  selectedSortOrder: string;
}

const SortSelector = ({ onSlectedOrder, selectedSortOrder }: Probs) => {
  const sortOrders = [
    { value: "aa", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "rating", label: "Average rating" },
  ];

  const sortOrderHandle = (sortOrder: string) => {
    onSlectedOrder(sortOrder);
  };

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {selectedSortOrder ? currentSortOrder?.label : "Relevance"}
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
