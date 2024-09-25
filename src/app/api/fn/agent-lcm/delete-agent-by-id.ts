/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteAgentById$Params {

/**
 * Agent ID
 */
  id: string;

/**
 * Agent object version. Ensures concurrent updates do not lead to inconsitency
 */
  resource_version: number;

/**
 * jwt token of the user invoking this api
 */
  'bearer-token': string;
}

export function deleteAgentById(http: HttpClient, rootUrl: string, params: DeleteAgentById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteAgentById.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('resource_version', params.resource_version, {});
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

deleteAgentById.PATH = '/api/v1/agents/{id}/resource_version/{resource_version}';
