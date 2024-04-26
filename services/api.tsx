import {Category} from '../types/Category';
import {Lesson} from '../types/Lesson';

const baseUrl = 'http://10.0.2.2:3000/manitou/api';
async function get<T>(url: string): Promise<T> {
  const fullUrl = `${baseUrl}/${url}`;
  console.log(fullUrl);
  const response = await fetch(fullUrl);
  // @ts-ignore
  const json = (await response.json()) as T;
  return json;
}

export const getCategories = async (): Promise<Category[]> => {
  // Implement API call to fetch categories
  // Return mocked data for demonstration purposes
  return await get('gethebrewcategories');
};

export const getCategoryDetails = async (
  categoryId: number,
): Promise<{lessons: Lesson[]; subCategories: Category[]}> => {
  // Implement API call to fetch songs by category
  // Return mocked data for demonstration purposes
  return await get(`getSingleHebrewCategoryFull?categoryID=${categoryId}`);
};
