/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersCreateUserRequest } from '../../models/users-create-user-request';
import { UsersSingleUserResponse } from '../../models/users-single-user-response';

export interface CreateUser$Params {

/**
 * name of the B2B2C agent
 */
  agent: string;

/**
 * jwt token of the caller invoking this api
 */
  'bearer-token': string;
      body?: UsersCreateUserRequest
}

export function createUser(http: HttpClient, rootUrl: string, params: CreateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersSingleUserResponse>> {
  const rb = new RequestBuilder(rootUrl, createUser.PATH, 'post');
  if (params) {
    rb.path('agent', params.agent, {});
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

createUser.PATH = '/api/v1/agents/{agent}/users';
