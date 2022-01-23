import { IRole } from './Role.interface';

export interface IRolesState {
  roles: IRole[];
  activeRole?: IRole;
  validationErrors?: string[];
  deletedRole?: boolean;
}
