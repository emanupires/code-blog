import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import PostCards from "../PostCards/Index";
import { useState } from "react";

export const Search = () => {
  return (
    <InputGroup>
      <InputLeftElement
        mt={"4px"}
        pointerEvents="none"
        // eslint-disable-next-line react/no-children-prop
        children={<SearchIcon color="#FFF" />}
      />
      <Input
        variant="Unstyled"
        bgColor={"#FFFFFF33"}
        type="search"
        placeholder="Pesquisar no blog"
        _placeholder={{ color: "#FFF" }}
        size="lg"
        fontSize={{ base: "14px", md: "18px" }}
      />
    </InputGroup>
  );
};
