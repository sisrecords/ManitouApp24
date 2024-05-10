import {Category} from '../types/Category';
import {Lesson} from '../types/Lesson';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const baseUrl = 'http://10.0.2.2:3000/manitou/api';
const baseUrl = 'http://localhost:3000/manitou/api';
async function get<T>(url: string): Promise<T> {
  const authKey = await AsyncStorage.getItem('authKey');
  const fullUrl = `${baseUrl}/${url}`;
  const res = await axios.get(fullUrl, {
    headers: {
      authorization: authKey ? `Basic ${authKey}` : '',
    },
  });

  return res.data as T;
}

async function post<T>(url: string, body: any = {}): Promise<T> {
  const fullUrl = `${baseUrl}/${url}`;
  const response = await axios.post(fullUrl, body);
  return response.data as T;
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

export const sendEmailOTP = async (email: string): Promise<void> => {
  return await post('registerUser', {email});
};

export const validateOTP = async (
  token: string,
  otp: string,
): Promise<void> => {
  return await post('validateUserWithCode', {token, code: otp});
};
