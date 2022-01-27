import { IBackendErrors } from 'src/app/store/sharedtypes/BackendErrors.interface';
import { IPosition } from './Position.interface';

export interface IPositionState {
  activePosition?: IPosition;
  positions?: IPosition[];
  deletedPosition?: boolean;

  //////
  validationErrors?: string[];
}
