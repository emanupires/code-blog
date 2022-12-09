import { Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

export const StarButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <IconButton
      variant={"ghost"}
      aria-label="Favoritar"
      icon={
        <StarIcon
          color={isActive ? "#D10000" : "#717171"}
          onClick={handleClick}
        />
      }
    />
  );
};
