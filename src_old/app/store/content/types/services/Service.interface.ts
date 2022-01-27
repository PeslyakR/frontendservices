import { IRole } from '../roles/Role.interface';

export interface IService {
  id?: number;
  title: string;
  status?: string;
  description?: string;
  updated?: string;
  roles?: IRole[];
}
