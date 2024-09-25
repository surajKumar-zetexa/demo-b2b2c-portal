/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersGetVisaResponse } from '../../models/users-get-visa-response';

export interface GetVisa$Params {

/**
 * name of the B2B2C agent who is managing the user
 */
  agent: string;

/**
 * internally generated user-id, should be a valid UUID
 */
  user_id: string;

/**
 * jwt token of the caller invoking this api
 */
  'bearer-token': string;
}

export function getVisa(http: HttpClient, rootUrl: string, params: GetVisa$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersGetVisaResponse>> {
  const rb = new RequestBuilder(rootUrl, getVisa.PATH, 'get');
  if (params) {
    rb.path('agent', params.agent, {});
    rb.path('user_id', params.user_id, {});
    rb.header('bearer-token', params['bearer-token'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsersGetVisaResponse>;
    })
  );
}

getVisa.PATH = '/api/v1/agents/{agent}/users/{user_id}/visa';
