import { IPosition } from './Position.interface';

export interface IPositionState {
  activePosition?: IPosition;
  positions?: IPosition[];
  deletedPosition?: boolean;

  //////
  validationErrors?: string[];
}
