import { Content } from "./content";

export type UserDTO = {
  _id: string;
  username: string;
  email: string;
  profilePicture: string | undefined;
  token: string;
  list: Content[];
};
