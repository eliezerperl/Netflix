import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import axios, { AxiosError } from 'axios';
import { jwtDecode } from 'jwt-decode';
import { UserDTO } from '@/models/userDTO';
import { Content } from '@/models/content';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface CustomError extends Error {
  response?: {
    data: {
      message: string;
    };
  };
}
export const getError = (err: CustomError) => {
  return err.message && err.response?.data.message
    ? err.response.data.message
    : err.message;
};

export const isTokenInvalid = (token: string): boolean => {
  const decoded = jwtDecode(token);
  if (!decoded.exp) throw new Error('No valid token');

  console.log('exp string ' + new Date(decoded.exp * 1000));
  console.log('current date ' + new Date());
  const isExpired = new Date() > new Date(decoded.exp * 1000);
  console.log('expired? ' + isExpired);
  return isExpired;
};

export const requestContent = async (
  userInfo: UserDTO | null,
  apiRoute?: string | undefined
): Promise<Content[] | undefined> => {
  if (!userInfo) return;
  if (userInfo && isTokenInvalid(userInfo.token)) return;

  const { data } = await axios.get(`/api/v1/content/${apiRoute}`, {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  });
  return data;
};

export type { AxiosError };
