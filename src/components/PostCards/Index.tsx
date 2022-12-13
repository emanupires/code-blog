import { Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useEffect, useState, FC, ChangeEvent } from "react";
import axios from "axios";
import { api, getAllPosts, showPostsOnANewPage } from "../../services/api";
import { useRouter } from "next/router";
import { StarButton } from "../StarButton";
import Link from "next/link";
import {
  Pagination,
  usePagination,
  PaginationPage,
  PaginationNext,
  PaginationPrevious,
  PaginationPageGroup,
  PaginationContainer,
  PaginationSeparator,
} from "@ajna/pagination";

export interface IPosts {
  id: number;
  title: string;
  body: string;
}

export const PostCards = ({ post }: any) => {
  const router = useRouter();
  const [allPosts, setAllPosts] = useState<IPosts[] | null>(null);

  return (
    <Flex
      justify={"center"}
      mt={{ base: "48px", md: "96px" }}
      paddingX={{ base: "30px", md: "auto" }}
      width={"100%"}
    >
      <Flex
        direction={"column"}
        maxW={{ base: "full", md: "1170px" }}
        width={"100%"}
      >
        {allPosts &&
          allPosts.map((posts) => (
            <>
              <Flex
                bgColor="#FFFFFF"
                boxShadow="xs"
                mb={{ base: "24px", md: "48px" }}
                padding={"24px"}
                direction={"column"}
                key={posts.id}
              >
                <Flex
                  alignItems={"center"}
                  direction={"row"}
                  justify={"space-between"}
                  mb={"16px"}
                >
                  <Text color="#717171" fontSize={{ base: "14px", md: "16px" }}>
                    09 de dez., 2022
                  </Text>
                  <Flex>
                    <StarButton />
                  </Flex>
                </Flex>
                <Flex direction={"column"}>
                  <Link href={`${posts.id}`}>
                    <Heading
                      color="#1A202C"
                      fontSize={{ base: "18px", md: "26px" }}
                      mb={"8px"}
                    >
                      {posts.title}
                    </Heading>
                  </Link>
                  <Text fontSize={{ base: "14px", md: "18px" }}>
                    {posts.body}
                  </Text>
                </Flex>
              </Flex>
            </>
          ))}
      </Flex>
    </Flex>
  );
};

export default PostCards;
