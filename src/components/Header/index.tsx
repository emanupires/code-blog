import { Box, Flex, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      as="section"
      bgGradient="linear(to-r, #574AE8, #3EA1DB)"
      justify={"center"}
      width={"100%"}
    >
      <Flex maxWidth={{ base: "full", md: "1170px" }}>
        <Heading>Codelândia</Heading>
        <Heading>blog</Heading>
      </Flex>
    </Flex>
  );
};
