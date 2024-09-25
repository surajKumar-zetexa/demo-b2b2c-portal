/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersEkycResponse } from '../../models/users-ekyc-response';
import { UsersUpdateEkycRequest } from '../../models/users-update-ekyc-request';

export interface UpdateEkyc$Params {
  agent: string;
  user_id: string;
  resource_version: number;
  id: string;
  'bearer-token'?: string;
      body?: UsersUpdateEkycRequest
}

export function updateEkyc(http: HttpClient, rootUrl: string, params: UpdateEkyc$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersEkycResponse>> {
  const rb = new RequestBuilder(rootUrl, updateEkyc.PATH, 'put');
  if (params) {
    rb.path('agent', params.agent, {});
    rb.path('user_id', params.user_id, {});
    rb.path('resource_version', params.resource_version, {});
    rb.path('id', params.id, {});
    rb.header('bearer-token', params['bearer-token'], {});
    rb.body(params.body, 'application/json');
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

updateEkyc.PATH = '/api/v1/agents/{agent}/users/{user_id}/ekycs/{id}/resource_version/{resource_version}';
