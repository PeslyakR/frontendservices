import { ICurrentUser } from 'src/app/store/auth/types/CurrentUser.interface';
import { IBackendErrors } from '../../content/types/errors/BackendErrors.interface';

export interface IAuthState {
  isSubmitting: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean;
  validationErrors: IBackendErrors | null;
}
