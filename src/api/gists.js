import { request } from "./request"

export const getPublicApi = (page = 1) => {
  return request.get(`gists/public?page=${page}`);
};

export const searchGistsByNameApi = (name="natasha") => {
  return request.get(`users/${name}/gists`);
};

