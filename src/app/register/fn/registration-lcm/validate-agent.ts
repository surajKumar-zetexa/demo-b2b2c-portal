/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RegistrationAgentValidationRequest } from '../../models/registration-agent-validation-request';
import { RegistrationAgentValidationResponse } from '../../models/registration-agent-validation-response';

export interface ValidateAgent$Params {
  'bearer-token'?: string;
      body?: RegistrationAgentValidationRequest
}

export function validateAgent(http: HttpClient, rootUrl: string, params?: ValidateAgent$Params, context?: HttpContext): Observable<StrictHttpResponse<RegistrationAgentValidationResponse>> {
  const rb = new RequestBuilder(rootUrl, validateAgent.PATH, 'post');
  if (params) {
    rb.header('bearer-token', params['bearer-token'], {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RegistrationAgentValidationResponse>;
    })
  );
}

validateAgent.PATH = '/api/v1/agents/validate';
