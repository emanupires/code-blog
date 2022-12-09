import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { IPosts } from "../components/PostCards/Index";
import { showPostsOnANewPage } from "../services/api";

export default function Home() {
  const router = useRouter();
  const [post, setPost] = useState<IPosts | null>(null);

  useEffect(() => {
    if (router.query.id) {
      showPostsOnANewPage(Number(router.query.id)).then((res) => setPost(res));
    }
  }, [router]);

  return (
    <>
      <Header />
      <Flex
        as="section"
        justify={"center"}
        minH={"80vh"}
        paddingX={{ base: "30px", md: "auto" }}
        paddingY={{ base: "24px", md: "64px" }}
        width={"100%"}
      >
        <Flex maxW={{ base: "full", md: "1170px" }} direction={"column"}>
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
        </Flex>
      </Flex>
    </>
  );
}
