import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const sortTypes = [
    "Relevance",
    "Date Added",
    "Name",
    "Release Date",
    "Popularity",
    "Average Rating",
  ];

  return (
    <Menu>
      <MenuButton marginLeft={2} as={Button} rightIcon={<BsChevronDown />}>
        Order By: Relevance
      </MenuButton>

      <MenuList>
        {sortTypes.map((type) => (
          <MenuItem key={type}>{type}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
