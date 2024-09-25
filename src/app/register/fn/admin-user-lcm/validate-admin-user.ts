/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegistrationAdminUserValidationRequest } from '../../models/registration-admin-user-validation-request';
import { RegistrationAdminUserValidationResponse } from '../../models/registration-admin-user-validation-response';

export interface ValidateAdminUser$Params {
  'bearer-token'?: string;
      body?: RegistrationAdminUserValidationRequest
}

export function validateAdminUser(http: HttpClient, rootUrl: string, params?: ValidateAdminUser$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationAdminUserValidationResponse>> {
  const rb = new RequestBuilder(rootUrl, validateAdminUser.PATH, 'post');
  if (params) {
    rb.header('bearer-token', params['bearer-token'], {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RegistrationAdminUserValidationResponse>;
    })
  );
}

validateAdminUser.PATH = '/api/v1/admin/validate';
