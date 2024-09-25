/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegistrationListRolesResponse } from '../../models/registration-list-roles-response';

export interface ListRoles$Params {
  'bearer-token'?: string;
}

export function listRoles(http: HttpClient, rootUrl: string, params?: ListRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationListRolesResponse>> {
  const rb = new RequestBuilder(rootUrl, listRoles.PATH, 'get');
  if (params) {
    rb.header('bearer-token', params['bearer-token'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RegistrationListRolesResponse>;
    })
  );
}

listRoles.PATH = '/api/v1/admin/roles';
