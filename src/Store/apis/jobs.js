import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jobsApi = createApi({
  reducerPath: 'jobs',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://remotive.com/api/remote-jobs'
  }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => '?category=software-dev&limit=5'
    })
  })
})

export const { useGetJobsQuery } = jobsApi
