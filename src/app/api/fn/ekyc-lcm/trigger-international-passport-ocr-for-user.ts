/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FormDataUsersTriggerPassportOcrRequest } from '../../models/form-data-users-trigger-passport-ocr-request';
import { UsersTriggerPassportInterOcrResponse } from '../../models/users-trigger-passport-inter-ocr-response';

export interface TriggerInternationalPassportOcrForUser$Params {

/**
 * name of the B2B2C agent who is managing the user
 */
  agent: string;

/**
 * internally generated user-id, should be a valid UUID
 */
  user_id: string;

/**
 * jwt token of the caller invoking this api
 */
  'bearer-token': string;
      body?: FormDataUsersTriggerPassportOcrRequest
}

export function triggerInternationalPassportOcrForUser(http: HttpClient, rootUrl: string, params: TriggerInternationalPassportOcrForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersTriggerPassportInterOcrResponse>> {
  const rb = new RequestBuilder(rootUrl, triggerInternationalPassportOcrForUser.PATH, 'post');
  if (params) {
    rb.path('agent', params.agent, {});
    rb.path('user_id', params.user_id, {});
    rb.header('bearer-token', params['bearer-token'], {});
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsersTriggerPassportInterOcrResponse>;
    })
  );
}

triggerInternationalPassportOcrForUser.PATH = '/api/v1/agents/{agent}/users/{user_id}/international/passport/ocr/trigger';
