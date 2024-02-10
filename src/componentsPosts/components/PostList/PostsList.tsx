import { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import "./css/posts.css";
import { Link } from "react-router-dom";

/**
 * Renders a list of posts and provides functionality for deleting and editing posts.
 *
 * @returns {JSX.Element} The rendered list of posts
 */
const PostsList = () => {
  const { data, isLoading, error, fetchNow } = useFetch({
    url: "http://localhost:7070/posts",
  });

  useEffect(() => {
    fetchNow();
  }, []);

  /**
   * Handles the deletion of a post.
   *
   * @param {number} id - The ID of the post to delete
   * @returns {Promise<void>} A promise that resolves after the deletion is complete
   */
  const handleDelete = async (id: number) => {
    try {
      await fetch(`http://localhost:7070/posts/${id}`, {
        method: "DELETE",
      });
      fetchNow();
    } catch (error) {
      console.error("Error deleting post:", error.message);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div>
        {data &&
          data.map((item) => (
            <div key={item.id} className="posts__list_item">
              <p>{item.content}</p>
              <button onClick={() => handleDelete(item.id)}>Удалить</button>
              <Link to={`/posts/${item.id}`}>
                <button>редактировать</button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostsList;
