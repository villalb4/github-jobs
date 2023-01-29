import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { jobsAdapter } from '../../Adapters/jobsAdapter'

export const jobsApi = createApi({
  reducerPath: 'jobs',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://remotive.com/api/',
    adapter: jobsAdapter()
  }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => 'remote-jobs?category=software-dev&limit=5'
    })
  })
})

export const { useGetJobsQuery } = jobsApi
