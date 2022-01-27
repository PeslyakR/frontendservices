import { ActionReducerMap, combineReducers } from '@ngrx/store';
import { authReducer } from '../../auth/reducers/reducers';
import { departmentReducer } from './departments.reducers';
import { employeeReducer } from './employee.reducers';
import { positionReducer } from './positions.reducers';
import { requestReducer } from './request.reducers';
import { roleReducer } from './role.reducers';
import { serviceReducer } from './service.reducers';
import { userReducer } from './user.reducers';

export const reducers = combineReducers({
  department: departmentReducer,
  employee: employeeReducer,
  position: positionReducer,
  request: requestReducer,
  role: roleReducer,
  service: serviceReducer,
  user: userReducer,
  auth: authReducer,
});
