import axios from "axios";
import { useState } from "react";
import { Header } from "../components/Header";
import { PostCards } from "../components/PostCards/Index";
import { getAllPosts } from "../services/api";

interface Props {
  allPosts: IAllPostData[];
}
export default function Home({ allPosts }: Props) {
  return (
    <>
      <PostCards allPosts={allPosts} />
    </>
  );
}

export interface IAllPosts {
  data: IAllPostData[];
}

export interface IAllPostData {
  id: number;
  attributes: {
    title: string | null;
    slug: string | null;
    summary: string | null;
    data: string | null;
  };
}

export async function getStaticProps() {
  const allPosts: IAllPosts = await getAllPosts();

  return {
    props: {
      allPosts: allPosts.data,
    }, // will be passed to the page component as props
  };
}
