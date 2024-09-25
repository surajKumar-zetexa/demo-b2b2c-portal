/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersAgentResponse } from '../../models/users-agent-response';
import { UsersUpdateAgentRequest } from '../../models/users-update-agent-request';

export interface UpdateAgent$Params {

/**
 * Agent ID
 */
  id: string;

/**
 * Agent object version. Ensures concurrent updates do not lead to inconsitency
 */
  resource_version: number;

/**
 * jwt token of the user invoking this api
 */
  'bearer-token': string;
      body?: UsersUpdateAgentRequest
}

export function updateAgent(http: HttpClient, rootUrl: string, params: UpdateAgent$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersAgentResponse>> {
  const rb = new RequestBuilder(rootUrl, updateAgent.PATH, 'put');
  if (params) {
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
      return r as StrictHttpResponse<UsersAgentResponse>;
    })
  );
}

updateAgent.PATH = '/api/v1/agents/{id}/resource_version/{resource_version}';
