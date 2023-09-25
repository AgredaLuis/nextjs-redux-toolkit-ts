import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

type User = {
  id:number,
  name: string,
  email: string,
  username: string,
}

export const userApi = createApi({
  reducerPath: "useAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  endpoints: (builder) => {
    return {
      getUsers: builder.query<User[], null>({
        query: () => 'users' 
      }),
      getUsersById: builder.query<User, {id: string}>({
        query: (id) => `users/${id}`
      })
    }
  }
})

export const {useGetUsersByIdQuery, useGetUsersQuery} = userApi