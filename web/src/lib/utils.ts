import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { AxiosError } from 'axios';

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

export type { AxiosError };
