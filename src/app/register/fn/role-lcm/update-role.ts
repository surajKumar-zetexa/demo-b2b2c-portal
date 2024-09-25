/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegistrationRoleResponse } from '../../models/registration-role-response';
import { RegistrationUpdateRoleRequest } from '../../models/registration-update-role-request';

export interface UpdateRole$Params {
  id: string;
  resource_version: number;
  'bearer-token'?: string;
      body?: RegistrationUpdateRoleRequest
}

export function updateRole(http: HttpClient, rootUrl: string, params: UpdateRole$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationRoleResponse>> {
  const rb = new RequestBuilder(rootUrl, updateRole.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('resource_version', params.resource_version, {});
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

updateRole.PATH = '/api/v1/admin/roles/{id}/resource_version/{resource_version}';
