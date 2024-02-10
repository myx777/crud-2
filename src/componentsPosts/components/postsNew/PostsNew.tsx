import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import "./css/postNew.css";
import PostFormContainer from "../posts/PostFormContainer";
/**
 * компонент создания нового поста. Использует кастомный useFetch,
 * с помощью которого отправляет данные на сервер в JSON, сохраняет текущее
 * введенное значение в textarea в localStorage, срок удаления не задан
 *
 * @return {JSX.Element} возвращает компонент PostFormContainer.
 */
const PostNews = () => {
  const [content, setContent] = useState<string>("");
  const [id, setId] = useState<number>(0);

  const { isLoading, error, fetchNow } = useFetch({
    url: "http://localhost:7070/posts",
    options: {
      method: "POST",
      body: JSON.stringify({ id, content }),
    },
  });
console.info(error);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setContent(value);
    localStorage.setItem("content", JSON.stringify(value));
  };

  useEffect(() => {
    const storedItem = localStorage.getItem("content");
    if (storedItem && storedItem !== null) {
      const items = JSON.parse(localStorage.getItem("content"));
      setContent(items);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetchNow();
    setId((prevId) => prevId + 1);
    window.location.href = "/";
    setContent("");
  };

  return (
    <PostFormContainer
      content={content}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
      contentLoadingButton={"Отправка...."}
      contentButton={"Отправить"}
    />
  );
};

export default PostNews;
