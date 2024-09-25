/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegistrationCreateRoleRequest } from '../../models/registration-create-role-request';
import { RegistrationRoleResponse } from '../../models/registration-role-response';

export interface CreateRole$Params {
  'bearer-token'?: string;
      body?: RegistrationCreateRoleRequest
}

export function createRole(http: HttpClient, rootUrl: string, params?: CreateRole$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationRoleResponse>> {
  const rb = new RequestBuilder(rootUrl, createRole.PATH, 'post');
  if (params) {
    rb.header('bearer-token', params['bearer-token'], {});
    rb.body(params.body, 'application/json');
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

createRole.PATH = '/api/v1/admin/roles';
