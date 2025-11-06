import { useQuery } from '@tanstack/react-query';
import { wpAPI } from '../api/wordpress';

// Hook para obtener posts con paginación
export const usePosts = (page = 1, perPage = 10, categoryId?: number) => {
  return useQuery({
    queryKey: ['posts', page, perPage, categoryId],
    queryFn: () => wpAPI.getPosts({
      page, 
      per_page: perPage,
      categories: categoryId 
    }),
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
};

// Hook para obtener un post por slug
export const usePostBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['post', slug],
    queryFn: () => wpAPI.getPostBySlug(slug),
    enabled: !!slug,
    staleTime: 10 * 60 * 1000, // 10 minutos
  });
};

// Hook para obtener páginas
export const usePages = () => {
  return useQuery({
    queryKey: ['pages'],
    queryFn: () => wpAPI.getPages(),
    staleTime: 15 * 60 * 1000, // 15 minutos
  });
};

// Hook para obtener una página por slug
export const usePageBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['page', slug],
    queryFn: () => wpAPI.getPageBySlug(slug),
    enabled: !!slug,
    staleTime: 15 * 60 * 1000,
  });
};

// Hook para obtener categorías
export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => wpAPI.getNotPronosticoCategories(),
    staleTime: 30 * 60 * 1000, // 30 minutos
  });
};

// NUEVO: Hook para obtener pronósticos
export const usePronosticos = (page = 1, perPage = 12, hipodromo?: string) => {
  return useQuery({
    queryKey: ['pronosticos', page, perPage, hipodromo],
    queryFn: () => wpAPI.getPronosticos({ page, per_page: perPage, hipodromo }),
    staleTime: 5 * 60 * 1000,
  });
};

// NUEVO: Hook para obtener un pronóstico por slug
export const usePronosticoBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['pronostico', slug],
    queryFn: () => wpAPI.getPronosticoBySlug(slug),
    enabled: !!slug,
    staleTime: 10 * 60 * 1000,
  });
};