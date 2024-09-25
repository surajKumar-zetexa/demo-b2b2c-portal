/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersAgentResponse } from '../../models/users-agent-response';

export interface GetAgentByQuery$Params {

/**
 * Agent ID
 */
  id?: string;

/**
 * Agent or company name
 */
  name?: string;

/**
 * email of the agent
 */
  email?: string;

/**
 * Phone number including country code, without any special characters
 */
  phonenumber?: string;

/**
 * jwt token of the user invoking this api
 */
  'bearer-token': string;
}

export function getAgentByQuery(http: HttpClient, rootUrl: string, params: GetAgentByQuery$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersAgentResponse>> {
  const rb = new RequestBuilder(rootUrl, getAgentByQuery.PATH, 'get');
  if (params) {
    rb.query('id', params.id, {});
    rb.query('name', params.name, {});
    rb.query('email', params.email, {});
    rb.query('phonenumber', params.phonenumber, {});
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

getAgentByQuery.PATH = '/api/v1/agents/agent';
