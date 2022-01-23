import { IRequest } from './Request.interface';

export interface IRequestsState {
  requests: IRequest[];
  activeRequest?: IRequest;
  validationErrors?: string[];
  deletedRequest?: boolean;
}
