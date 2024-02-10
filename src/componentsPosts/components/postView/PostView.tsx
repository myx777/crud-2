import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from "react";
import PostFormContainer from "../posts/PostFormContainer";
/**
 * Компонент, срабатывающий при редактировании поста.
 * использует хук useParams для получения id нужного поста, и дальнейшей загрузкой поста
 * с сервера, использую id. при нажатии на крестик пост не сохраняется и осуществляется
 * переход на главную страницу, при отправке происходит вызов fetch и перезаписываение
 * поста
 *
 * так как данные на главной странице (Array: {id, content и еще какаято шляпа серверная})
 * и тут( post: {id, content, postId}) приходят немного в разных форматах, не знаю как отипизировать
 *
 * @return {JSX.Element} перезаписанный jsx PostFormContainer при сохранении
 */
const PostView = () => {
  const { postId } = useParams();
  const [content, setContent] = useState<string>(""); // Состояние для содержимого поста

  const { data, isLoading, error, fetchNow } = useFetch({
    url: `http://localhost:7070/posts/${postId}`,
  });

  useEffect(() => {
    fetchNow();
  }, [postId]);

  useEffect(() => {
    if (data) {
      setContent(data.post.content);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:7070/posts/${postId}`, {
        method: "PUT",
        body: JSON.stringify({ postId, content }),
      });
      setContent("");
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
