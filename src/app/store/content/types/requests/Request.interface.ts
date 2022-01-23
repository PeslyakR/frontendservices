import { IEmployee } from '../employees/Employee.interface';
import { IService } from '../services/Service.interface';

export interface IRequest {
  id?: number;
  header: string;
  body: string;
  idAuthor: number;
  author?: IEmployee;
  status?: string;

  idService: number;
  service?: IService;

  idAdmin?: number;
  admin?: IEmployee;
  adminisratorComment?: string;
  adminisratorRequest?: string; //enum

  idCopywriter?: number;
  copywriter?: IEmployee;
  copywriterComment?: string;
  copywriterRequest?: string; //enum

  idRoles?: number[];
  roles?: String[];
}
