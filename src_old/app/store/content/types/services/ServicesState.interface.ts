import { IService } from './Service.interface';

export interface IServiceState {
  services: IService[];
  activeService?: IService;
  validationErrors?: string[];
  deletedService?: boolean;
}
