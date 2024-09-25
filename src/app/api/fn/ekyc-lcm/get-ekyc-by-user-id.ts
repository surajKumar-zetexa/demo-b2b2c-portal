/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersEkyCsResponse } from '../../models/users-eky-cs-response';

export interface GetEkycByUserId$Params {
  agent: string;
  user_id: string;
  'bearer-token'?: string;
}

export function getEkycByUserId(http: HttpClient, rootUrl: string, params: GetEkycByUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersEkyCsResponse>> {
  const rb = new RequestBuilder(rootUrl, getEkycByUserId.PATH, 'get');
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
      return r as StrictHttpResponse<UsersEkyCsResponse>;
    })
  );
}

getEkycByUserId.PATH = '/api/v1/agents/{agent}/users/{user_id}/ekycs';
