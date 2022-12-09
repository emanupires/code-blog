import { Flex, Heading } from "@chakra-ui/react";
import { Search } from "../Search";

export const Header = () => {
  return (
    <Flex
      as="section"
      bgGradient="linear(to-r, #574AE8, #3EA1DB)"
      paddingX={{ base: "30px", md: "auto" }}
      justify={"center"}
      width={"100%"}
      paddingY={"40px"}
    >
      <Flex
        maxW={{ base: "full", md: "1170px" }}
        width={"100%"}
        direction={"column"}
      >
        <Flex
          justify={"space-between"}
          paddingBottom={{ base: "42px", md: "72px" }}
        >
          <Flex p={"24x"} direction={"row"}>
            <Heading
              color="#FFFFFF"
              fontSize={{ base: "18px", md: "24px" }}
              fontWeight={"400"}
            >
              Codelândia
            </Heading>
          </Flex>
          <Flex p={"24x"}>
            <Heading
              color="#FFFFFF"
              fontSize={{ base: "18px", md: "24px" }}
              fontWeight={"400"}
            >
              blog
            </Heading>
          </Flex>
        </Flex>
        <Search />
      </Flex>
    </Flex>
  );
};
