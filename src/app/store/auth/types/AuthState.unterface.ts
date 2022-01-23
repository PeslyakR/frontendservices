import { ICurrentUser } from 'src/app/components/login/types/CurrentUser.interface';
import { IBackendErrors } from '../../sharedtypes/BackendErrors.interface';

export interface IAuthState {
  isSubmitting: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean;
  validationErrors: IBackendErrors | null;
}
