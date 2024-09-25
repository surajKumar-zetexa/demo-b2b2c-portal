/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createAdminUser } from '../fn/admin-user-lcm/create-admin-user';
import { CreateAdminUser$Params } from '../fn/admin-user-lcm/create-admin-user';
import { deleteAdminUser } from '../fn/admin-user-lcm/delete-admin-user';
import { DeleteAdminUser$Params } from '../fn/admin-user-lcm/delete-admin-user';
import { getAdminUser } from '../fn/admin-user-lcm/get-admin-user';
import { GetAdminUser$Params } from '../fn/admin-user-lcm/get-admin-user';
import { listAdminUsers } from '../fn/admin-user-lcm/list-admin-users';
import { ListAdminUsers$Params } from '../fn/admin-user-lcm/list-admin-users';
import { registerAdminUser } from '../fn/admin-user-lcm/register-admin-user';
import { RegisterAdminUser$Params } from '../fn/admin-user-lcm/register-admin-user';
import { RegistrationAdminUserResponse } from '../models/registration-admin-user-response';
import { RegistrationAdminUsersResponse } from '../models/registration-admin-users-response';
import { RegistrationAdminUserValidationResponse } from '../models/registration-admin-user-validation-response';
import { updateAdminUser } from '../fn/admin-user-lcm/update-admin-user';
import { UpdateAdminUser$Params } from '../fn/admin-user-lcm/update-admin-user';
import { validateAdminUser } from '../fn/admin-user-lcm/validate-admin-user';
import { ValidateAdminUser$Params } from '../fn/admin-user-lcm/validate-admin-user';

@Injectable({ providedIn: 'root' })
export class AdminUserLcmService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `registerAdminUser()` */
  static readonly RegisterAdminUserPath = '/api/v1/admin/login';

  /**
   * Admin User LCM.
   *
   * This API is used to Send the OTP to the email
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerAdminUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerAdminUser$Response(params?: RegisterAdminUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return registerAdminUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Admin User LCM.
   *
   * This API is used to Send the OTP to the email
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registerAdminUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerAdminUser(params?: RegisterAdminUser$Params, context?: HttpContext): Observable<void> {
    return this.registerAdminUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `listAdminUsers()` */
  static readonly ListAdminUsersPath = '/api/v1/admin/users';

  /**
   * List Admin Users.
   *
   * This API can be used to fetch all the admin users filtered by role
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAdminUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAdminUsers$Response(params?: ListAdminUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationAdminUsersResponse>> {
    return listAdminUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * List Admin Users.
   *
   * This API can be used to fetch all the admin users filtered by role
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listAdminUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAdminUsers(params?: ListAdminUsers$Params, context?: HttpContext): Observable<RegistrationAdminUsersResponse> {
    return this.listAdminUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegistrationAdminUsersResponse>): RegistrationAdminUsersResponse => r.body)
    );
  }

  /** Path part for operation `createAdminUser()` */
  static readonly CreateAdminUserPath = '/api/v1/admin/users';

  /**
   * Create Admin User.
   *
   * This API creates a Admin user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createAdminUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAdminUser$Response(params?: CreateAdminUser$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationAdminUserResponse>> {
    return createAdminUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Create Admin User.
   *
   * This API creates a Admin user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createAdminUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAdminUser(params?: CreateAdminUser$Params, context?: HttpContext): Observable<RegistrationAdminUserResponse> {
    return this.createAdminUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegistrationAdminUserResponse>): RegistrationAdminUserResponse => r.body)
    );
  }

  /** Path part for operation `getAdminUser()` */
  static readonly GetAdminUserPath = '/api/v1/admin/users/email/{email}';

  /**
   * Get Admin User.
   *
   * This API can be used to fetch Admin User by using emailID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAdminUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdminUser$Response(params: GetAdminUser$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationAdminUserResponse>> {
    return getAdminUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Admin User.
   *
   * This API can be used to fetch Admin User by using emailID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAdminUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdminUser(params: GetAdminUser$Params, context?: HttpContext): Observable<RegistrationAdminUserResponse> {
    return this.getAdminUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegistrationAdminUserResponse>): RegistrationAdminUserResponse => r.body)
    );
  }

  /** Path part for operation `updateAdminUser()` */
  static readonly UpdateAdminUserPath = '/api/v1/admin/users/email/{email}/resource_version/{resource_version}';

  /**
   * Update Admin User.
   *
   * This API can be used to update admin user roles and names
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAdminUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAdminUser$Response(params: UpdateAdminUser$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationAdminUserResponse>> {
    return updateAdminUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Update Admin User.
   *
   * This API can be used to update admin user roles and names
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateAdminUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAdminUser(params: UpdateAdminUser$Params, context?: HttpContext): Observable<RegistrationAdminUserResponse> {
    return this.updateAdminUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegistrationAdminUserResponse>): RegistrationAdminUserResponse => r.body)
    );
  }

  /** Path part for operation `deleteAdminUser()` */
  static readonly DeleteAdminUserPath = '/api/v1/admin/users/email/{email}/resource_version/{resource_version}';

  /**
   * Delete Admin Users.
   *
   * This API can be used to delete roles in the db by ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAdminUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAdminUser$Response(params: DeleteAdminUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteAdminUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete Admin Users.
   *
   * This API can be used to delete roles in the db by ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteAdminUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAdminUser(params: DeleteAdminUser$Params, context?: HttpContext): Observable<void> {
    return this.deleteAdminUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `validateAdminUser()` */
  static readonly ValidateAdminUserPath = '/api/v1/admin/validate';

  /**
   * Validate Admin User.
   *
   * This API is used validate admin user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `validateAdminUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  validateAdminUser$Response(params?: ValidateAdminUser$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationAdminUserValidationResponse>> {
    return validateAdminUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Validate Admin User.
   *
   * This API is used validate admin user
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `validateAdminUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  validateAdminUser(params?: ValidateAdminUser$Params, context?: HttpContext): Observable<RegistrationAdminUserValidationResponse> {
    return this.validateAdminUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegistrationAdminUserValidationResponse>): RegistrationAdminUserValidationResponse => r.body)
    );
  }

}
