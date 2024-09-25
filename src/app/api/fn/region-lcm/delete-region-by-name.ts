/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DeleteRegionByName$Params {
  region_name: string;
  resource_version: number;

/**
 * jwt token of the user invoking this api
 */
  'bearer-token': string;
}

export function deleteRegionByName(http: HttpClient, rootUrl: string, params: DeleteRegionByName$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, deleteRegionByName.PATH, 'delete');
  if (params) {
    rb.path('region_name', params.region_name, {});
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

deleteRegionByName.PATH = '/api/v1/regions/{region_name}/resource_version/{resource_version}';
