export type FetchStatusProps = {
    isLoading: boolean;
    data: string | undefined;
    error: Error | null;
}