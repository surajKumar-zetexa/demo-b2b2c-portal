/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegistrationRoleResponse } from '../../models/registration-role-response';

export interface GetRoleByName$Params {
  role?: string;
  'bearer-token'?: string;
}

export function getRoleByName(http: HttpClient, rootUrl: string, params?: GetRoleByName$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationRoleResponse>> {
  const rb = new RequestBuilder(rootUrl, getRoleByName.PATH, 'get');
  if (params) {
    rb.query('role', params.role, {});
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

getRoleByName.PATH = '/api/v1/admin/roles/name';
