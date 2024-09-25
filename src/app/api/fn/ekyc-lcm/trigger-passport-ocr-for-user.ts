/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FormDataUsersTriggerPassportOcrRequest } from '../../models/form-data-users-trigger-passport-ocr-request';
import { UsersTriggerPassportOcrResponse } from '../../models/users-trigger-passport-ocr-response';

export interface TriggerPassportOcrForUser$Params {

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

export function triggerPassportOcrForUser(http: HttpClient, rootUrl: string, params: TriggerPassportOcrForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersTriggerPassportOcrResponse>> {
  const rb = new RequestBuilder(rootUrl, triggerPassportOcrForUser.PATH, 'post');
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
      return r as StrictHttpResponse<UsersTriggerPassportOcrResponse>;
    })
  );
}

triggerPassportOcrForUser.PATH = '/api/v1/agents/{agent}/users/{user_id}/passport/ocr/trigger';
