/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegistrationAdminUserResponse } from '../../models/registration-admin-user-response';

export interface GetAdminUser$Params {
  email: string;
  'bearer-token'?: string;
}

export function getAdminUser(http: HttpClient, rootUrl: string, params: GetAdminUser$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationAdminUserResponse>> {
  const rb = new RequestBuilder(rootUrl, getAdminUser.PATH, 'get');
  if (params) {
    rb.path('email', params.email, {});
    rb.header('bearer-token', params['bearer-token'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RegistrationAdminUserResponse>;
    })
  );
}

getAdminUser.PATH = '/api/v1/admin/users/email/{email}';
