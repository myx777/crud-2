export type FetchStatusProps = {
  isLoading: boolean;
  data?: Array<{content: string; created: string; id: number}>;
  error: string | null;
}