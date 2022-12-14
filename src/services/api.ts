import axios from "axios";

export const api = axios.create({
  baseURL: "https://atitus-cms.herokuapp.com/api/",
});

export const getAllPosts = async () => {
  const allPosts = await api.get("/blogs");

  return allPosts.data;
};

export const showPostsOnANewPage = async (id: number) => {
  const showPost = await api.get(`/blogs/${id}`);

  return showPost.data;
};
