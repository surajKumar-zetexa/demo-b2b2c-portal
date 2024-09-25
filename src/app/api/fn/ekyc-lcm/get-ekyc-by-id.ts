/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersEkycResponse } from '../../models/users-ekyc-response';

export interface GetEkycById$Params {
  agent: string;
  user_id: string;
  id: string;
  'bearer-token'?: string;
}

export function getEkycById(http: HttpClient, rootUrl: string, params: GetEkycById$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersEkycResponse>> {
  const rb = new RequestBuilder(rootUrl, getEkycById.PATH, 'get');
  if (params) {
    rb.path('agent', params.agent, {});
    rb.path('user_id', params.user_id, {});
    rb.path('id', params.id, {});
    rb.header('bearer-token', params['bearer-token'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsersEkycResponse>;
    })
  );
}

getEkycById.PATH = '/api/v1/agents/{agent}/users/{user_id}/ekycs/{id}';
