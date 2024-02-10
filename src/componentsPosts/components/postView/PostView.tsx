import useFetch from "../../../hooks/useFetch";
import { useState } from "react";
import PostFormContainer from "../posts/PostFormContainer";
import { usePostContext } from "../../../context/hooks/usePostContext";

/**
 * Компонент, срабатывающий при редактировании поста.
 * использует Контекст и вытаскивает оттуда редактируемый пост
 * При нажатии на крестик пост не сохраняется и осуществляется
 * переход на главную страницу, при отправке происходит вызов кастомного usefetch
 * и перезаписываение поста
 *
 * @return {JSX.Element} перезаписанный jsx PostFormContainer при сохранении
 */
const PostView = () => {
  const { editingPost } = usePostContext();

  if (editingPost === null) return;

  const [content, setContent] = useState(editingPost.content);

  const { isLoading, error, fetchNow } = useFetch({
    url: `http://localhost:7070/posts/${editingPost.id}`,
    options: {
      method: "PUT",
      body: JSON.stringify({ content }),
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetchNow();
      window.location.href = "/";
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  return (
    <PostFormContainer
      content={content}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
      contentLoadingButton="Сохранение..."
      contentButton="Сохранить"
    />
  );
};

export default PostView;
