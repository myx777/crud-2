import { Route, Routes } from "react-router-dom";
import PostNews from "./components/postsNew/PostsNew";
import PostsList from "./components/PostList/PostsList";
import PostView from "./components/postView/PostView";

/**
 * Renders a component to display different routes for displaying posts.
 *
 * @return {JSX.Element} The rendered component for displaying routes.
 */
const ComponentPosts = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/new" element={<PostNews />} />
        <Route path="/posts/:id" element={<PostView />} />
      </Routes>
    </>
  );
};
export default ComponentPosts;
