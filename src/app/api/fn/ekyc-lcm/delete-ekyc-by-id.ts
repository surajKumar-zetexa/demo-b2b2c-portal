/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteEkycById$Params {
  id: string;
  user_id: string;
  agent: string;
  resource_version: number;
  'bearer-token'?: string;
}

export function deleteEkycById(http: HttpClient, rootUrl: string, params: DeleteEkycById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteEkycById.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('user_id', params.user_id, {});
    rb.path('agent', params.agent, {});
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

deleteEkycById.PATH = '/api/v1/agents/{agent}/users/{user_id}/ekycs/{id}/resource_version/{resource_version}';
