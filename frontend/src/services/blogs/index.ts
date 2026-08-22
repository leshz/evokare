import { getCollections, get } from '../restclient';
import { BlogsResponse, BlogResponse } from './types';
import { STRAPI_API_PATHS, RELATED_POSTS_LIMIT } from '@/constants';

interface GetBlogsParams {
  page?: number;
  pageSize?: number;
}

export const getBlogsService = async (params?: GetBlogsParams) => {
  try {
    let url: string = STRAPI_API_PATHS.BLOGS;

    if (params) {
      const queryParams = new URLSearchParams();

      if (params.page) {
        queryParams.append('pagination[page]', params.page.toString());
      }

      if (params.pageSize) {
        queryParams.append('pagination[pageSize]', params.pageSize.toString());
      }

      const queryString = queryParams.toString();
      if (queryString) {
        url = `${url}?${queryString}`;
      }
    }

    const blogsResponse = await getCollections<BlogsResponse['data']>(url);
    return blogsResponse;
  } catch (error) {
    throw error;
  }
};

export const getBlogBySlugService = async (slug: string) => {
  try {
    const blogResponse = await get<BlogResponse['data']>(
      `${STRAPI_API_PATHS.BLOGS}/${slug}`
    );
    return blogResponse;
  } catch (error) {
    throw error;
  }
};

interface GetRelatedBlogsParams {
  slugsEtiquetas: string[];
  slugActual: string;
  limit?: number;
}

export const getRelatedBlogsService = async ({
  slugsEtiquetas,
  slugActual,
  limit = RELATED_POSTS_LIMIT,
}: GetRelatedBlogsParams) => {
  if (slugsEtiquetas.length === 0) {
    return { data: [] as BlogsResponse['data'] };
  }

  try {
    const queryParams = new URLSearchParams();

    slugsEtiquetas.forEach((slug, index) => {
      queryParams.append(`filters[etiquetas][slug][$in][${index}]`, slug);
    });
    queryParams.append('filters[slug][$ne]', slugActual);
    queryParams.append('pagination[pageSize]', limit.toString());
    queryParams.append('sort', 'publishedAt:desc');

    const { data } = await getCollections<BlogsResponse['data']>(
      `${STRAPI_API_PATHS.BLOGS}?${queryParams.toString()}`
    );

    return { data };
  } catch (error) {
    throw error;
  }
};
