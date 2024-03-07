import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import axios, { AxiosError } from 'axios';
import { JwtPayload, jwtDecode } from 'jwt-decode';
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

export const isTokenInvalid = (user: UserDTO): boolean => {
  type JwtPayloadWithUser = JwtPayload & UserDTO;
  const decoded: JwtPayloadWithUser = jwtDecode(user.token);
  if (!decoded.exp) throw new Error('No valid token');

  const isEqual: boolean =
    user._id === decoded._id &&
    user.username === decoded.username &&
    user.email === decoded.email &&
    user.profilePicture === decoded.profilePicture;
  //data check
  if (!isEqual) {
    console.log('User properties dont match those in decoded.');
    return true;
  }
  //Expiry Check
  const isExpired = new Date() > new Date(decoded.exp * 1000);
  return isExpired;
};

export const requestContent = async (
  userInfo: UserDTO | null,
  apiRoute?: string | undefined,
  query?: string | undefined
): Promise<Content[] | undefined> => {
  if (!userInfo) return;
  if (userInfo && isTokenInvalid(userInfo)) return;
  if (!apiRoute) apiRoute = '';
  if (!query) query = '';
  const { data } = await axios.get(
    `/api/v1/content/${apiRoute}${'/' + query}`,
    {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
  );
  return data;
};

export const refreshToken = async (user: UserDTO): Promise<UserDTO> => {
  const { token, ...userWithoutToken } = user;

  const { data } = await axios.post(
    '/api/v1/users/refresh-token',
    {
      _id: userWithoutToken._id,
      username: userWithoutToken.username,
      email: userWithoutToken.email,
      profilePicture: userWithoutToken.profilePicture,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const { newToken } = data;

  const userWithNewToken = { ...userWithoutToken, token: newToken };
  localStorage.setItem('userInfo', JSON.stringify(userWithNewToken));
  return userWithNewToken;
};

export const addToList = async (userId: string, content: Content) => {
  await axios.post('api/v1/users/addtolist', {
    userId,
    content,
  });
};

export const removeFromList = async (userId: string, content: Content) => {
  const { data } = await axios.post('api/v1/users/removefromlist', {
    userId,
    content,
  });
  console.log(data);
};

export type { AxiosError };
