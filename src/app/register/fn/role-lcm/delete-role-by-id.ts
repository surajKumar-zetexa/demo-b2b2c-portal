/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteRoleById$Params {
  id: string;
  resource_version: number;
  'bearer-token'?: string;
}

export function deleteRoleById(http: HttpClient, rootUrl: string, params: DeleteRoleById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteRoleById.PATH, 'delete');
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

deleteRoleById.PATH = '/api/v1/admin/roles/{id}/resource_version/{resource_version}';
