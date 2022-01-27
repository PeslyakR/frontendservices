export enum ERequestsActionTypes {
  FINDALL = '[Requests]-find-all',
  FIND_REQUESTS_FOR_CONFIRMING = '[Requests]-find-all-for-confirming',
  FIND_BY_ID = '[Requests]-find-by-id',
  CREATE = '[Requests]-create',
  DELETE = '[Requests]-delete',
  UPDATE = '[Requests]-update',
  CONFIRM = '[Requests]-confirm',
  SUCCESS_GET_ONE = '[Requests]-get-one-success',
  SUCCESS_GET_MANY = '[Requests]-get-many-success',
  SUCCESS_DELETE = '[Requests]-delete-success',
  ERROR = '[Requests]-failure',
}
