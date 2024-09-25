/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersGenerateOtpResponse } from '../../models/users-generate-otp-response';

export interface GenerateAadharOtp$Params {

/**
 * name of the B2B2C agent who is managing the user
 */
  agent: string;

/**
 * internally generated user-id, should be a valid UUID
 */
  user_id: string;

/**
 * valid for indian nationals only. should contain a valid aadhar number of the user
 */
  aadhar_num: string;

/**
 * jwt token of the caller invoking this api
 */
  'bearer-token': string;
}

export function generateAadharOtp(http: HttpClient, rootUrl: string, params: GenerateAadharOtp$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersGenerateOtpResponse>> {
  const rb = new RequestBuilder(rootUrl, generateAadharOtp.PATH, 'post');
  if (params) {
    rb.path('agent', params.agent, {});
    rb.path('user_id', params.user_id, {});
    rb.path('aadhar_num', params.aadhar_num, {});
    rb.header('bearer-token', params['bearer-token'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsersGenerateOtpResponse>;
    })
  );
}

generateAadharOtp.PATH = '/api/v1/agents/{agent}/users/{user_id}/aadhar/{aadhar_num}/generate-otp';
