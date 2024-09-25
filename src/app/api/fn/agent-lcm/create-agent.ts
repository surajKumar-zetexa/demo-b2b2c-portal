/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersAgentResponse } from '../../models/users-agent-response';
import { UsersCreateAgentRequest } from '../../models/users-create-agent-request';

export interface CreateAgent$Params {

/**
 * jwt token of the user invoking this api
 */
  'bearer-token': string;
      body?: UsersCreateAgentRequest
}

export function createAgent(http: HttpClient, rootUrl: string, params: CreateAgent$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersAgentResponse>> {
  const rb = new RequestBuilder(rootUrl, createAgent.PATH, 'post');
  if (params) {
    rb.header('bearer-token', params['bearer-token'], {});
    rb.body(params.body, 'application/json');
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

createAgent.PATH = '/api/v1/agents';
