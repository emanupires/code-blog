import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getAllPosts = async () => {
  const allPosts = await api.get("/posts");

  return allPosts.data;
};

export const showPostsOnANewPage = async (id: number) => {
  const showPost = await api.get(`/posts/${id}`);

  return showPost.data;
};
