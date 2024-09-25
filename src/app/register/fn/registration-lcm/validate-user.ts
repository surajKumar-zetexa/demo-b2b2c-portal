/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegistrationUserValidationRequest } from '../../models/registration-user-validation-request';
import { RegistrationUserValidationResponse } from '../../models/registration-user-validation-response';

export interface ValidateUser$Params {
  agent: string;
  'bearer-token'?: string;
      body?: RegistrationUserValidationRequest
}

export function validateUser(http: HttpClient, rootUrl: string, params: ValidateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationUserValidationResponse>> {
  const rb = new RequestBuilder(rootUrl, validateUser.PATH, 'post');
  if (params) {
    rb.path('agent', params.agent, {});
    rb.header('bearer-token', params['bearer-token'], {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RegistrationUserValidationResponse>;
    })
  );
}

validateUser.PATH = '/api/v1/agents/{agent}/users/validate';
