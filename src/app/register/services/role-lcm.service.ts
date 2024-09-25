/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createRole } from '../fn/role-lcm/create-role';
import { CreateRole$Params } from '../fn/role-lcm/create-role';
import { deleteRoleById } from '../fn/role-lcm/delete-role-by-id';
import { DeleteRoleById$Params } from '../fn/role-lcm/delete-role-by-id';
import { deleteRoleByName } from '../fn/role-lcm/delete-role-by-name';
import { DeleteRoleByName$Params } from '../fn/role-lcm/delete-role-by-name';
import { getRoleById } from '../fn/role-lcm/get-role-by-id';
import { GetRoleById$Params } from '../fn/role-lcm/get-role-by-id';
import { getRoleByName } from '../fn/role-lcm/get-role-by-name';
import { GetRoleByName$Params } from '../fn/role-lcm/get-role-by-name';
import { listPermissions } from '../fn/role-lcm/list-permissions';
import { ListPermissions$Params } from '../fn/role-lcm/list-permissions';
import { listRoles } from '../fn/role-lcm/list-roles';
import { ListRoles$Params } from '../fn/role-lcm/list-roles';
import { RegistrationGetPermissionResponse } from '../models/registration-get-permission-response';
import { RegistrationListRolesResponse } from '../models/registration-list-roles-response';
import { RegistrationRoleResponse } from '../models/registration-role-response';
import { updateRole } from '../fn/role-lcm/update-role';
import { UpdateRole$Params } from '../fn/role-lcm/update-role';

@Injectable({ providedIn: 'root' })
export class RoleLcmService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `listPermissions()` */
  static readonly ListPermissionsPath = '/api/v1/admin/permissions';

  /**
   * List Permissions.
   *
   * This API can be used to List all permissions associated with the productD
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listPermissions()` instead.
   *
   * This method doesn't expect any request body.
   */
  listPermissions$Response(params?: ListPermissions$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationGetPermissionResponse>> {
    return listPermissions(this.http, this.rootUrl, params, context);
  }

  /**
   * List Permissions.
   *
   * This API can be used to List all permissions associated with the productD
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listPermissions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listPermissions(params?: ListPermissions$Params, context?: HttpContext): Observable<RegistrationGetPermissionResponse> {
    return this.listPermissions$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegistrationGetPermissionResponse>): RegistrationGetPermissionResponse => r.body)
    );
  }

  /** Path part for operation `listRoles()` */
  static readonly ListRolesPath = '/api/v1/admin/roles';

  /**
   * List Roles.
   *
   * This API can be used to fetch all the roles in the DB
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listRoles()` instead.
   *
   * This method doesn't expect any request body.
   */
  listRoles$Response(params?: ListRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationListRolesResponse>> {
    return listRoles(this.http, this.rootUrl, params, context);
  }

  /**
   * List Roles.
   *
   * This API can be used to fetch all the roles in the DB
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listRoles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listRoles(params?: ListRoles$Params, context?: HttpContext): Observable<RegistrationListRolesResponse> {
    return this.listRoles$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegistrationListRolesResponse>): RegistrationListRolesResponse => r.body)
    );
  }

  /** Path part for operation `createRole()` */
  static readonly CreateRolePath = '/api/v1/admin/roles';

  /**
   * Create Role.
   *
   * This API can be used to create new roles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createRole$Response(params?: CreateRole$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationRoleResponse>> {
    return createRole(this.http, this.rootUrl, params, context);
  }

  /**
   * Create Role.
   *
   * This API can be used to create new roles
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createRole(params?: CreateRole$Params, context?: HttpContext): Observable<RegistrationRoleResponse> {
    return this.createRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegistrationRoleResponse>): RegistrationRoleResponse => r.body)
    );
  }

  /** Path part for operation `getRoleByName()` */
  static readonly GetRoleByNamePath = '/api/v1/admin/roles/name';

  /**
   * Get Role.
   *
   * This API can be used to fetch role by Name
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRoleByName()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoleByName$Response(params?: GetRoleByName$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationRoleResponse>> {
    return getRoleByName(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Role.
   *
   * This API can be used to fetch role by Name
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRoleByName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoleByName(params?: GetRoleByName$Params, context?: HttpContext): Observable<RegistrationRoleResponse> {
    return this.getRoleByName$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegistrationRoleResponse>): RegistrationRoleResponse => r.body)
    );
  }

  /** Path part for operation `deleteRoleByName()` */
  static readonly DeleteRoleByNamePath = '/api/v1/admin/roles/name';

  /**
   * Delete Role.
   *
   * This API can be used to delete role by Name
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteRoleByName()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRoleByName$Response(params?: DeleteRoleByName$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteRoleByName(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete Role.
   *
   * This API can be used to delete role by Name
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteRoleByName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRoleByName(params?: DeleteRoleByName$Params, context?: HttpContext): Observable<void> {
    return this.deleteRoleByName$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getRoleById()` */
  static readonly GetRoleByIdPath = '/api/v1/admin/roles/{id}';

  /**
   * Get Role.
   *
   * This API can be used to fetch role by ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRoleById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoleById$Response(params: GetRoleById$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationRoleResponse>> {
    return getRoleById(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Role.
   *
   * This API can be used to fetch role by ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRoleById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRoleById(params: GetRoleById$Params, context?: HttpContext): Observable<RegistrationRoleResponse> {
    return this.getRoleById$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegistrationRoleResponse>): RegistrationRoleResponse => r.body)
    );
  }

  /** Path part for operation `updateRole()` */
  static readonly UpdateRolePath = '/api/v1/admin/roles/{id}/resource_version/{resource_version}';

  /**
   * Update Role.
   *
   * This API can be used to update roles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateRole()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRole$Response(params: UpdateRole$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationRoleResponse>> {
    return updateRole(this.http, this.rootUrl, params, context);
  }

  /**
   * Update Role.
   *
   * This API can be used to update roles
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateRole$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateRole(params: UpdateRole$Params, context?: HttpContext): Observable<RegistrationRoleResponse> {
    return this.updateRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<RegistrationRoleResponse>): RegistrationRoleResponse => r.body)
    );
  }

  /** Path part for operation `deleteRoleById()` */
  static readonly DeleteRoleByIdPath = '/api/v1/admin/roles/{id}/resource_version/{resource_version}';

  /**
   * Delete Roles.
   *
   * This API can be used to delete roles in the db by ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteRoleById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRoleById$Response(params: DeleteRoleById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteRoleById(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete Roles.
   *
   * This API can be used to delete roles in the db by ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteRoleById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteRoleById(params: DeleteRoleById$Params, context?: HttpContext): Observable<void> {
    return this.deleteRoleById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
