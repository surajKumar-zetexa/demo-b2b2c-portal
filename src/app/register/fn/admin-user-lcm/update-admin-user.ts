/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegistrationAdminUserResponse } from '../../models/registration-admin-user-response';
import { RegistrationUpdateAdminUserRequest } from '../../models/registration-update-admin-user-request';

export interface UpdateAdminUser$Params {
  resource_version: number;
  email: string;
  'bearer-token'?: string;
      body?: RegistrationUpdateAdminUserRequest
}

export function updateAdminUser(http: HttpClient, rootUrl: string, params: UpdateAdminUser$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationAdminUserResponse>> {
  const rb = new RequestBuilder(rootUrl, updateAdminUser.PATH, 'put');
  if (params) {
    rb.path('resource_version', params.resource_version, {});
    rb.path('email', params.email, {});
    rb.header('bearer-token', params['bearer-token'], {});
    rb.body(params.body, 'application/json');
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

updateAdminUser.PATH = '/api/v1/admin/users/email/{email}/resource_version/{resource_version}';
