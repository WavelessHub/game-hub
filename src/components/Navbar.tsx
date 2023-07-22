import { HStack, Image } from "@chakra-ui/react";

import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding="4px" paddingX="10px" paddingRight="20px" marginBottom={2}>
      <Image src={logo} boxSize="70px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
