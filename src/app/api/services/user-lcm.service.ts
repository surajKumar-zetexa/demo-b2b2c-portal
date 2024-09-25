/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createUser } from '../fn/user-lcm/create-user';
import { CreateUser$Params } from '../fn/user-lcm/create-user';
import { deleteUserById } from '../fn/user-lcm/delete-user-by-id';
import { DeleteUserById$Params } from '../fn/user-lcm/delete-user-by-id';
import { deleteUserByQuery } from '../fn/user-lcm/delete-user-by-query';
import { DeleteUserByQuery$Params } from '../fn/user-lcm/delete-user-by-query';
import { getUserById } from '../fn/user-lcm/get-user-by-id';
import { GetUserById$Params } from '../fn/user-lcm/get-user-by-id';
import { getUserByQuery } from '../fn/user-lcm/get-user-by-query';
import { GetUserByQuery$Params } from '../fn/user-lcm/get-user-by-query';
import { getUserForAnalytics } from '../fn/user-lcm/get-user-for-analytics';
import { GetUserForAnalytics$Params } from '../fn/user-lcm/get-user-for-analytics';
import { getUserOfAgent } from '../fn/user-lcm/get-user-of-agent';
import { GetUserOfAgent$Params } from '../fn/user-lcm/get-user-of-agent';
import { updateUser } from '../fn/user-lcm/update-user';
import { UpdateUser$Params } from '../fn/user-lcm/update-user';
import { UsersGetUserByQueryResponse } from '../models/users-get-user-by-query-response';
import { UsersSingleUserResponse } from '../models/users-single-user-response';

@Injectable({ providedIn: 'root' })
export class UserLcmService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getUserByQuery()` */
  static readonly GetUserByQueryPath = '/api/v1/agents/users';

  /**
   * Get user by query.
   *
   * Get a user using the queries
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserByQuery()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByQuery$Response(params: GetUserByQuery$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersGetUserByQueryResponse>> {
    return getUserByQuery(this.http, this.rootUrl, params, context);
  }

  /**
   * Get user by query.
   *
   * Get a user using the queries
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserByQuery$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByQuery(params: GetUserByQuery$Params, context?: HttpContext): Observable<UsersGetUserByQueryResponse> {
    return this.getUserByQuery$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersGetUserByQueryResponse>): UsersGetUserByQueryResponse => r.body)
    );
  }

  /** Path part for operation `getUserOfAgent()` */
  static readonly GetUserOfAgentPath = '/api/v1/agents/{agent}/users';

  /**
   * Get Users of an agent.
   *
   * Get users belonging to an agent
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserOfAgent()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserOfAgent$Response(params: GetUserOfAgent$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersGetUserByQueryResponse>> {
    return getUserOfAgent(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Users of an agent.
   *
   * Get users belonging to an agent
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserOfAgent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserOfAgent(params: GetUserOfAgent$Params, context?: HttpContext): Observable<UsersGetUserByQueryResponse> {
    return this.getUserOfAgent$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersGetUserByQueryResponse>): UsersGetUserByQueryResponse => r.body)
    );
  }

  /** Path part for operation `createUser()` */
  static readonly CreateUserPath = '/api/v1/agents/{agent}/users';

  /**
   * Create user.
   *
   * Create a user with all the user parameters
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser$Response(params: CreateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersSingleUserResponse>> {
    return createUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Create user.
   *
   * Create a user with all the user parameters
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser(params: CreateUser$Params, context?: HttpContext): Observable<UsersSingleUserResponse> {
    return this.createUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersSingleUserResponse>): UsersSingleUserResponse => r.body)
    );
  }

  /** Path part for operation `deleteUserByQuery()` */
  static readonly DeleteUserByQueryPath = '/api/v1/agents/{agent}/users';

  /**
   * Delete User By Query.
   *
   * Delete a User: Agent Name, Email or Phone. When using only Agent name, all users for that agent would be deleted
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserByQuery()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserByQuery$Response(params: DeleteUserByQuery$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteUserByQuery(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete User By Query.
   *
   * Delete a User: Agent Name, Email or Phone. When using only Agent name, all users for that agent would be deleted
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUserByQuery$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserByQuery(params: DeleteUserByQuery$Params, context?: HttpContext): Observable<void> {
    return this.deleteUserByQuery$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getUserById()` */
  static readonly GetUserByIdPath = '/api/v1/agents/{agent}/users/{id}';

  /**
   * Get user by Id.
   *
   * Get a user using the Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserById$Response(params: GetUserById$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersSingleUserResponse>> {
    return getUserById(this.http, this.rootUrl, params, context);
  }

  /**
   * Get user by Id.
   *
   * Get a user using the Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserById(params: GetUserById$Params, context?: HttpContext): Observable<UsersSingleUserResponse> {
    return this.getUserById$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersSingleUserResponse>): UsersSingleUserResponse => r.body)
    );
  }

  /** Path part for operation `updateUser()` */
  static readonly UpdateUserPath = '/api/v1/agents/{agent}/users/{id}/resource_version/{resource_version}';

  /**
   * Update user.
   *
   * Update a user with all the user parameters
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser$Response(params: UpdateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersSingleUserResponse>> {
    return updateUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Update user.
   *
   * Update a user with all the user parameters
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser(params: UpdateUser$Params, context?: HttpContext): Observable<UsersSingleUserResponse> {
    return this.updateUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersSingleUserResponse>): UsersSingleUserResponse => r.body)
    );
  }

  /** Path part for operation `deleteUserById()` */
  static readonly DeleteUserByIdPath = '/api/v1/agents/{agent}/users/{id}/resource_version/{resource_version}';

  /**
   * Delete User By Id.
   *
   * Delete a User Using the Id and Resource Version
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserById$Response(params: DeleteUserById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteUserById(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete User By Id.
   *
   * Delete a User Using the Id and Resource Version
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUserById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserById(params: DeleteUserById$Params, context?: HttpContext): Observable<void> {
    return this.deleteUserById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getUserForAnalytics()` */
  static readonly GetUserForAnalyticsPath = '/api/v1/users';

  /**
   * Get user by query.
   *
   * Get a user using the queries
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserForAnalytics()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserForAnalytics$Response(params: GetUserForAnalytics$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersGetUserByQueryResponse>> {
    return getUserForAnalytics(this.http, this.rootUrl, params, context);
  }

  /**
   * Get user by query.
   *
   * Get a user using the queries
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserForAnalytics$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserForAnalytics(params: GetUserForAnalytics$Params, context?: HttpContext): Observable<UsersGetUserByQueryResponse> {
    return this.getUserForAnalytics$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersGetUserByQueryResponse>): UsersGetUserByQueryResponse => r.body)
    );
  }

}
