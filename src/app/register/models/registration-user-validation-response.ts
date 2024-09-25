/* tslint:disable */
/* eslint-disable */
import { UsersapiDbadapterUser } from '../models/usersapi-dbadapter-user';
export interface RegistrationUserValidationResponse {
  agent_name?: string;
  email?: string;
  id?: string;
  token?: string;
  user?: UsersapiDbadapterUser;
  user_name?: string;
}
