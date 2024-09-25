/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersSubmitOtpRequest } from '../../models/users-submit-otp-request';
import { UsersSubmitOtpResponse } from '../../models/users-submit-otp-response';

export interface SubmitAadharOtp$Params {

/**
 * name of the B2B2C agent who is managing the user
 */
  agent: string;

/**
 * internally generated user-id, should be a valid UUID
 */
  user_id: string;

/**
 * opaque EKYC validation id that is returned in response to the Generate OTP API
 */
  id: string;

/**
 * jwt token of the caller invoking this api
 */
  'bearer-token': string;
      body?: UsersSubmitOtpRequest
}

export function submitAadharOtp(http: HttpClient, rootUrl: string, params: SubmitAadharOtp$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersSubmitOtpResponse>> {
  const rb = new RequestBuilder(rootUrl, submitAadharOtp.PATH, 'post');
  if (params) {
    rb.path('agent', params.agent, {});
    rb.path('user_id', params.user_id, {});
    rb.path('id', params.id, {});
    rb.header('bearer-token', params['bearer-token'], {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsersSubmitOtpResponse>;
    })
  );
}

submitAadharOtp.PATH = '/api/v1/agents/{agent}/users/{user_id}/ekycs/{id}/aadhar/submit-otp';
