import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { IAllPosts } from "..";
import { getAllPosts } from "../../services/api";

interface Props {
  post: IAllPosts;
}

export default function Blog({ post }: Props) {
  return (
    <>
      Slug da página é: {post.data[0].attributes.slug}
      <br />
      Resumo da página é: {post.data[0].attributes.summary}
      <Flex
        as="section"
        justify={"center"}
        minH={"80vh"}
        paddingX={{ base: "30px", md: "auto" }}
        paddingY={{ base: "24px", md: "64px" }}
        width={"100%"}
      >
        {/* <Flex maxW={{ base: "full", md: "1170px" }} direction={"column"}>
          {post && (
            <>
              <Heading paddingBottom={"24px"}>{post.title}</Heading>
              <Image
                alignSelf={"center"}
                alt="Placeholder"
                height={"300px"}
                src="https://place-hold.it/300"
                width={"300px"}
              />
              <Text paddingTop={"24px"}>{post.body}</Text>
            </>
          )}
        </Flex> */}
      </Flex>
    </>
  );
}

export const getStaticPaths = async () => {
  const posts: IAllPosts = await getAllPosts();

  const paths = posts.data.map((post) => {
    return {
      params: { slug: post.attributes.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ post: IAllPosts }> = async (
  context
) => {
  const { slug } = context.params;

  const post = await axios.get(
    "https://atitus-cms.herokuapp.com/api/blogs?filters[slug]=" + slug
  );

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: post.data,
    },
  };
};
