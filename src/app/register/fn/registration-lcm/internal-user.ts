/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegistrationInternalUserAaaRequest } from '../../models/registration-internal-user-aaa-request';
import { RegistrationInternalUserAaaResponse } from '../../models/registration-internal-user-aaa-response';

export interface InternalUser$Params {
      body?: RegistrationInternalUserAaaRequest
}

export function internalUser(http: HttpClient, rootUrl: string, params?: InternalUser$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationInternalUserAaaResponse>> {
  const rb = new RequestBuilder(rootUrl, internalUser.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RegistrationInternalUserAaaResponse>;
    })
  );
}

internalUser.PATH = '/api/v1/admin/internal/validate';
