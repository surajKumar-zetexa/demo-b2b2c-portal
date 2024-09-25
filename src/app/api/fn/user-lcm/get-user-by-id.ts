/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersSingleUserResponse } from '../../models/users-single-user-response';

export interface GetUserById$Params {

/**
 * name of the agent managing the user
 */
  agent: string;

/**
 * User ID
 */
  id: string;

/**
 * jwt token of the caller invoking this api
 */
  'bearer-token': string;
}

export function getUserById(http: HttpClient, rootUrl: string, params: GetUserById$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersSingleUserResponse>> {
  const rb = new RequestBuilder(rootUrl, getUserById.PATH, 'get');
  if (params) {
    rb.path('agent', params.agent, {});
    rb.path('id', params.id, {});
    rb.header('bearer-token', params['bearer-token'], {});
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

getUserById.PATH = '/api/v1/agents/{agent}/users/{id}';
