import { IUser } from './User.interface';

export interface IUserState {
  activeUser?: IUser;
  validationErrors?: string[];
  deletedUser?: boolean;
}
