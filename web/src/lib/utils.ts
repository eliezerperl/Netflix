import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { AxiosError } from 'axios';
import { jwtDecode } from 'jwt-decode';

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

export type { AxiosError };
