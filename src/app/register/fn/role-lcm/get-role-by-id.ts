/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegistrationRoleResponse } from '../../models/registration-role-response';

export interface GetRoleById$Params {
  id: string;
  'bearer-token'?: string;
}

export function getRoleById(http: HttpClient, rootUrl: string, params: GetRoleById$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationRoleResponse>> {
  const rb = new RequestBuilder(rootUrl, getRoleById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.header('bearer-token', params['bearer-token'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RegistrationRoleResponse>;
    })
  );
}

getRoleById.PATH = '/api/v1/admin/roles/{id}';
