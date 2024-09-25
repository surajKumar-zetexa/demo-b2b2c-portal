/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteAgentByQuery$Params {

/**
 * Agent ID
 */
  agent_id?: string;

/**
 * Agent or company name
 */
  agent_name?: string;

/**
 * email of the agent
 */
  email?: string;

/**
 * Phone number including country code, without any special characters
 */
  phone?: string;

/**
 * Agent object version. Ensures concurrent updates do not lead to inconsitency. To be used in conjunction with Id
 */
  resource_version?: number;

/**
 * jwt token of the user invoking this api
 */
  'bearer-token': string;
}

export function deleteAgentByQuery(http: HttpClient, rootUrl: string, params: DeleteAgentByQuery$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteAgentByQuery.PATH, 'delete');
  if (params) {
    rb.query('agent_id', params.agent_id, {});
    rb.query('agent_name', params.agent_name, {});
    rb.query('email', params.email, {});
    rb.query('phone', params.phone, {});
    rb.query('resource_version', params.resource_version, {});
    rb.header('bearer-token', params['bearer-token'], {});
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

deleteAgentByQuery.PATH = '/api/v1/agents';
