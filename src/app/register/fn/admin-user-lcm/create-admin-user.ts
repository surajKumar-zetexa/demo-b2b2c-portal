/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegistrationAdminUserResponse } from '../../models/registration-admin-user-response';
import { RegistrationCreateAdminUserRequest } from '../../models/registration-create-admin-user-request';

export interface CreateAdminUser$Params {
  'bearer-token'?: string;
      body?: RegistrationCreateAdminUserRequest
}

export function createAdminUser(http: HttpClient, rootUrl: string, params?: CreateAdminUser$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationAdminUserResponse>> {
  const rb = new RequestBuilder(rootUrl, createAdminUser.PATH, 'post');
  if (params) {
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

createAdminUser.PATH = '/api/v1/admin/users';
