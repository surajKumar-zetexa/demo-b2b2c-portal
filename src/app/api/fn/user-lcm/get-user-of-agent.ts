/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersGetUserByQueryResponse } from '../../models/users-get-user-by-query-response';

export interface GetUserOfAgent$Params {

/**
 * maximum number of records to be returned; must be less than 100
 */
  limit?: number;

/**
 * page number of the page to be retrieved; starts from 0.
 */
  page_marker?: number;

/**
 * name of the agent managing the user
 */
  agent: string;

/**
 * jwt token of the caller invoking this api
 */
  'bearer-token': string;
}

export function getUserOfAgent(http: HttpClient, rootUrl: string, params: GetUserOfAgent$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersGetUserByQueryResponse>> {
  const rb = new RequestBuilder(rootUrl, getUserOfAgent.PATH, 'get');
  if (params) {
    rb.query('limit', params.limit, {});
    rb.query('page_marker', params.page_marker, {});
    rb.path('agent', params.agent, {});
    rb.header('bearer-token', params['bearer-token'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsersGetUserByQueryResponse>;
    })
  );
}

getUserOfAgent.PATH = '/api/v1/agents/{agent}/users';
