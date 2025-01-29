import { 
  UseQueryOptions, 
  UseQueryResult, 
  useQuery, 
  useMutation, 
  UseMutationResult,
  UseMutationOptions,
  QueryKey
} from '@tanstack/react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';

// Custom error type
export interface ApiError {
  message: string;
  status: number;
}

// Base API configuration
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for authentication if needed
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Generic type for API responses
export type ApiResponse<T> = {
  data: T;
  status: number;
  message?: string;
};

// Custom hook for GET requests
export function useApiQuery<T>(
  queryKey: QueryKey,
  endpoint: string,
  options?: Omit<UseQueryOptions<ApiResponse<T>, AxiosError<ApiError>>, 'queryKey' | 'queryFn'>
): UseQueryResult<ApiResponse<T>, AxiosError<ApiError>> {
  return useQuery<ApiResponse<T>, AxiosError<ApiError>>({
    queryKey,
    queryFn: async () => {
      const response: AxiosResponse<ApiResponse<T>> = await api.get(endpoint);
      return response.data;
    },
    ...options,
  });
}

// Custom hook for POST requests
export function useApiMutation<TData, TVariables>(
  endpoint: string,
  options?: UseMutationOptions<ApiResponse<TData>, AxiosError<ApiError>, TVariables>
): UseMutationResult<ApiResponse<TData>, AxiosError<ApiError>, TVariables> {
  return useMutation<ApiResponse<TData>, AxiosError<ApiError>, TVariables>({
    mutationFn: async (variables) => {
      const response: AxiosResponse<ApiResponse<TData>> = await api.post(endpoint, variables);
      return response.data;
    },
    ...options,
  });
}

// Custom hook for PUT requests
export function useApiPut<TData, TVariables>(
  endpoint: string,
  options?: UseMutationOptions<ApiResponse<TData>, AxiosError<ApiError>, TVariables>
): UseMutationResult<ApiResponse<TData>, AxiosError<ApiError>, TVariables> {
  return useMutation<ApiResponse<TData>, AxiosError<ApiError>, TVariables>({
    mutationFn: async (variables) => {
      const response: AxiosResponse<ApiResponse<TData>> = await api.put(endpoint, variables);
      return response.data;
    },
    ...options,
  });
}

// Custom hook for DELETE requests
export function useApiDelete<TData>(
  endpoint: string,
  options?: UseMutationOptions<ApiResponse<TData>, AxiosError<ApiError>, void>
): UseMutationResult<ApiResponse<TData>, AxiosError<ApiError>, void> {
  return useMutation<ApiResponse<TData>, AxiosError<ApiError>, void>({
    mutationFn: async () => {
      const response: AxiosResponse<ApiResponse<TData>> = await api.delete(endpoint);
      return response.data;
    },
    ...options,
  });
}

// Type for pagination parameters
export interface PaginationParams {
  page?: number;
  limit?: number;
}

// Custom hook for paginated GET requests
export function useApiPaginatedQuery<T>(
  queryKey: QueryKey,
  endpoint: string,
  params: PaginationParams,
  options?: Omit<UseQueryOptions<ApiResponse<T>, AxiosError<ApiError>>, 'queryKey' | 'queryFn'>
): UseQueryResult<ApiResponse<T>, AxiosError<ApiError>> {
  return useQuery<ApiResponse<T>, AxiosError<ApiError>>({
    queryKey: [...queryKey, params],
    queryFn: async () => {
      const response: AxiosResponse<ApiResponse<T>> = await api.get(endpoint, {
        params: {
          page: params.page || 1,
          limit: params.limit || 10,
        },
      });
      return response.data;
    },
    ...options,
  });
}
