import { Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const PostCards = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <Flex
      justify={"center"}
      mt={{ base: "48px", md: "96px" }}
      paddingX={{ base: "30px", md: "auto" }}
      width={"100%"}
    >
      <Flex
        bgColor="#FFFFFF"
        boxShadow="xs"
        direction={"column"}
        maxW={{ base: "full", md: "1170px" }}
        padding={"24px"}
        width={"100%"}
      >
        <Flex
          alignItems={"center"}
          direction={"row"}
          justify={"space-between"}
          mb={"16px"}
        >
          <Text color="#717171" fontSize={{ base: "14px", md: "16px" }}>
            Data aqui
          </Text>
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
        </Flex>
        <Flex direction={"column"}>
          <Heading
            color="#1A202C"
            fontSize={{ base: "18px", md: "26px" }}
            mb={"8px"}
          >
            titulo
          </Heading>
          <Text fontSize={{ base: "14px", md: "18px" }}>oi</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
