/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegistrationUserRegistrationRequest } from '../../models/registration-user-registration-request';

export interface RegisterUser$Params {
  agent: string;
  'bearer-token'?: string;
      body?: RegistrationUserRegistrationRequest
}

export function registerUser(http: HttpClient, rootUrl: string, params: RegisterUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, registerUser.PATH, 'post');
  if (params) {
    rb.path('agent', params.agent, {});
    rb.header('bearer-token', params['bearer-token'], {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

registerUser.PATH = '/api/v1/agents/{agent}/users/login';
