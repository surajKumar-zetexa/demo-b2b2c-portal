/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersAgentResponse } from '../../models/users-agent-response';

export interface GetAgentById$Params {

/**
 * Agent ID
 */
  id: string;

/**
 * jwt token of the user invoking this api
 */
  'bearer-token': string;
}

export function getAgentById(http: HttpClient, rootUrl: string, params: GetAgentById$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersAgentResponse>> {
  const rb = new RequestBuilder(rootUrl, getAgentById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.header('bearer-token', params['bearer-token'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsersAgentResponse>;
    })
  );
}

getAgentById.PATH = '/api/v1/agents/{id}';
