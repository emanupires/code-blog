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
import { IAllPostData } from "../../pages";

// export interface IPosts {
//   id: number;
//   title: string;
//   body: string;
// }

interface Props {
  allPosts: IAllPostData[];
}

export const PostCards = ({ allPosts }: Props) => {
  const router = useRouter();

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
          allPosts.map((post) => (
            <>
              <Flex
                bgColor="#FFFFFF"
                boxShadow="xs"
                mb={{ base: "24px", md: "48px" }}
                padding={"24px"}
                direction={"column"}
                key={post.id}
              >
                <Flex
                  alignItems={"center"}
                  direction={"row"}
                  justify={"space-between"}
                  mb={"16px"}
                >
                  <Text color="#717171" fontSize={{ base: "14px", md: "16px" }}>
                    {post.attributes?.data}
                  </Text>
                  <Flex>
                    <StarButton />
                  </Flex>
                </Flex>
                <Flex direction={"column"}>
                  <Link href={`/post/${post.id}`}>
                    <Heading
                      color="#1A202C"
                      fontSize={{ base: "18px", md: "26px" }}
                      mb={"8px"}
                    >
                      {post.attributes?.title}
                    </Heading>
                  </Link>
                  <Text fontSize={{ base: "14px", md: "18px" }}>
                    {post.attributes?.summary}
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
