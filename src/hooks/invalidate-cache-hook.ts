import { useQueryClient } from "@tanstack/react-query";

export const useInvalidateCache = (queryKey: string) => {
  const queryClient = useQueryClient();

  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey: [queryKey] });
    queryClient.invalidateQueries({
      predicate: (query) =>
        Array.isArray(query.queryKey) && query.queryKey[0] === queryKey,
    });
  };

  return { invalidate };
};
