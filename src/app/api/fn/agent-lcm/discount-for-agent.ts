/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersGetAgentDiscountResponse } from '../../models/users-get-agent-discount-response';

export interface DiscountForAgent$Params {

/**
 * agent name
 */
  agent_name: string;
  'bearer-token'?: string;
}

export function discountForAgent(http: HttpClient, rootUrl: string, params: DiscountForAgent$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersGetAgentDiscountResponse>> {
  const rb = new RequestBuilder(rootUrl, discountForAgent.PATH, 'get');
  if (params) {
    rb.path('agent_name', params.agent_name, {});
    rb.header('bearer-token', params['bearer-token'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsersGetAgentDiscountResponse>;
    })
  );
}

discountForAgent.PATH = '/api/v1/agents/{agent_name}/discount';
