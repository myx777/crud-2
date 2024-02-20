import { useContext } from "react";
import { PostContext } from "../PostContext";

/**
 * Хук для использования контекста управления постами.
 * @returns {PostContextType} Контекст управления постами.
 * @throws {Error} Если хук используется вне компонента PostProvider.
 */
export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error(
      "usePostContext должен использоваться внутри компонента PostProvider"
    );
  }
  return context;
};
