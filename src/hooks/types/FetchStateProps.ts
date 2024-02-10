type DataProps = {
  content: string;
  createdAt: number;
  id: number;
};

export type FetchStatusProps = {
  isLoading: boolean;
  error: Error | null;
  data: DataProps[] | undefined;
};
