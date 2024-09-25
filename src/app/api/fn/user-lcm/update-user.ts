/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersSingleUserResponse } from '../../models/users-single-user-response';
import { UsersUpdateUserRequest } from '../../models/users-update-user-request';

export interface UpdateUser$Params {

/**
 * name of the agent managing the user
 */
  agent: string;

/**
 * internally generated user-id for the user, should be a valid UUID
 */
  id: string;

/**
 * User object version. Ensures concurrent updates do not lead to inconsitency
 */
  resource_version: number;

/**
 * jwt token of the caller invoking this api
 */
  'bearer-token': string;
      body?: UsersUpdateUserRequest
}

export function updateUser(http: HttpClient, rootUrl: string, params: UpdateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersSingleUserResponse>> {
  const rb = new RequestBuilder(rootUrl, updateUser.PATH, 'put');
  if (params) {
    rb.path('agent', params.agent, {});
    rb.path('id', params.id, {});
    rb.path('resource_version', params.resource_version, {});
    rb.header('bearer-token', params['bearer-token'], {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsersSingleUserResponse>;
    })
  );
}

updateUser.PATH = '/api/v1/agents/{agent}/users/{id}/resource_version/{resource_version}';
