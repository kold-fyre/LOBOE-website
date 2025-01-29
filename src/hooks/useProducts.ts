import { useApiQuery } from './useFetch';

export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  images: string[];
  category: string;
  inStock: boolean;
  // Add other product fields as needed
}

interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
}

interface UseProductsParams {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  sortBy?: 'price' | 'name' | 'newest';
  sortOrder?: 'asc' | 'desc';
}

export function useProducts(params: UseProductsParams = {}) {
  const queryParams = new URLSearchParams();
  
  if (params.page) queryParams.append('page', params.page.toString());
  if (params.limit) queryParams.append('limit', params.limit.toString());
  if (params.category) queryParams.append('category', params.category);
  if (params.search) queryParams.append('search', params.search);
  if (params.sortBy) queryParams.append('sortBy', params.sortBy);
  if (params.sortOrder) queryParams.append('sortOrder', params.sortOrder);

  const endpoint = `/products?${queryParams.toString()}`; // Replace with your actual API endpoint

  return useApiQuery<ProductsResponse>(
    ['products', params],
    endpoint,
    {
      keepPreviousData: true,
      staleTime: 1000 * 60 * 5, // Consider data fresh for 5 minutes
      refetchOnWindowFocus: false,
    }
  );
}