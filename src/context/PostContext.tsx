import { createContext, useContext, useState, ReactNode } from 'react';
import { Post } from './types/Post';
import { PostContextType } from './types/usePostContext';

/** Контекст для управления постами. */
export const PostContext = createContext<PostContextType | undefined>(undefined);

/**
 * Провайдер контекста для управления постами.
 * @param {Object} props - Свойства компонента.
 * @param {ReactNode} props.children - Дочерние компоненты, обернутые провайдером.
 * @returns {JSX.Element} Провайдер контекста для управления постами.
 */
export const PostProvider = ({ children }: { children: ReactNode }) => {
  /** Состояние для хранения редактируемого поста. */
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  /**
   * Функция для установки редактируемого поста.
   * @param {Post | null} post - Пост для редактирования или null для отмены редактирования.
   * @returns {void}
   */
  const setEditPost = (post: Post | null) => {
    setEditingPost(post);
  };

  return (
    <PostContext.Provider value={{ editingPost, setEditPost }}>
      {children}
    </PostContext.Provider>
  );
};


