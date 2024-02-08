import { Route, Routes } from "react-router-dom";
import PostNews from "./components/postsNew/PostsNew";
import Posts from "./components/posts/Posts";

const ComponentPosts = () => {
  return (
    <Routes>
        <Route path="/posts" element={<Posts />}/>
      <Route path="/posts/new" element={<PostNews />} />
    </Routes>
  );
};
export default ComponentPosts;
