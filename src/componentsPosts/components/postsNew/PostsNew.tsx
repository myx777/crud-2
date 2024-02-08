import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import "./css/postNew.css";

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

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetchNow();
    setId(prevId => prevId + 1);
    console.info("sending data:" + id + content);
    setContent('');
    
  }
  const loading = () => {
    return isLoading ? (
      <span className="will-submit__post">Публикация...</span>
    ) : (
      <span className="submit__post">Опубликовать</span>
    );
  };

  return (
    <div className="post__container">
      <form action="" className="post__form" onSubmit={handleSubmit}>
        <label htmlFor="post__texterea" className="post__label__textarea">
          Напишите пост:
        </label>
        <textarea
          id="post__texterea"
          value={content}
          onChange={handleChange}
          name="content"
          cols="30"
          rows="5"
        ></textarea>
        <button type="submit" disabled={isLoading}>
          {loading()}
        </button>
        {error && <div className="error__post">
          <span>Ошибка отправки</span>
        </div>}
      </form>
    </div>
  );

};

export default PostNews;
