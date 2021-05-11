import { useQuery } from "react-query";
import axios from "axios";

export const getBySearchParam = async (searchParam) => {
  if (searchParam === undefined) {
    return;
  }
  const { data } = await axios.get(
    `https://api.github.com/search/repositories?q=${searchParam}`
  );
  return data;
};

export default function useRepos(searchParam) {
  return useQuery(["searched-repos", searchParam], () =>
    getBySearchParam(searchParam)
  );
}
