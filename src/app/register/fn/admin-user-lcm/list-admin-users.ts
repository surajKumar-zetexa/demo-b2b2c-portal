/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegistrationAdminUsersResponse } from '../../models/registration-admin-users-response';

export interface ListAdminUsers$Params {
  role?: string;
  'bearer-token'?: string;
}

export function listAdminUsers(http: HttpClient, rootUrl: string, params?: ListAdminUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationAdminUsersResponse>> {
  const rb = new RequestBuilder(rootUrl, listAdminUsers.PATH, 'get');
  if (params) {
    rb.query('role', params.role, {});
    rb.header('bearer-token', params['bearer-token'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RegistrationAdminUsersResponse>;
    })
  );
}

listAdminUsers.PATH = '/api/v1/admin/users';
