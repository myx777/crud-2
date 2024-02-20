import { Post } from "./Post";

/**
 * Тип контекста для постов.
 * @typedef {Object} PostContextType
 * @property {Post | null} editingPost - Редактируемый пост или null, если ничего не редактируется.
 * @property {(post: Post | null) => void} setEditPost - Функция для установки редактируемого поста.
 */
export type PostContextType = {
  editingPost: Post | null;
  setEditPost: (post: Post | null) => void;
};
