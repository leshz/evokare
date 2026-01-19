import { getCollections, get } from '../restclient';
import { BlogsResponse, BlogResponse } from './types';
import { STRAPI_API_PATHS } from '@/constants';

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
