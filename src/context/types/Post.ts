/**
 * Тип данных для поста.
 * @typedef {Object} Post
 * @property {number} id - Уникальный идентификатор поста.
 * @property {string} content - Содержание поста.
 * @property {string} created - Дата создания поста.
 */
export type Post = {
    id: number;
    content: string;
    created: string;
  };