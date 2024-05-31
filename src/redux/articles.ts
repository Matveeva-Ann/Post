import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articlesApi = createApi({
  reducerPath:'articlesApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://6396aee2a68e43e41808fa18.mockapi.io/api'}),
  endpoints: (builder) => ({
    getArticles: builder.query({query: () => '/posts',}),
    getArticleItem: builder.query({query: (id) => `/posts/${id}`})
  })
})


export const { useGetArticlesQuery, useGetArticleItemQuery } = articlesApi;