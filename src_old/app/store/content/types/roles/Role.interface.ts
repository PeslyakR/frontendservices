import { IService } from '../services/Service.interface';

export interface IRole {
  id?: number;
  title: string;
  status?: string;
  description?: string;
  serviceId?: number;
  service?: IService;
  name: string;
  updated?: string;
}
