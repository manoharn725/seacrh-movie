import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://imdb8.p.rapidapi.com/auto-complete",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "a1e6758dd4msh946589780d7ee17p1a1c7cjsna3b70f0997e9"
      );
      headers.set("x-rapidapi-host", "imdb8.p.rapidapi.com");
      return headers;
    },
  }),
  tagTypes: ["getData"],
  endpoints: (builder) => ({
    getData: builder.query({
      query: (searchTerm) => `?q=${searchTerm}`,
      method: "GET",
    }),
  }),
});

export const { useGetDataQuery } = moviesApi;
