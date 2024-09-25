/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersRegionResponse } from '../../models/users-region-response';

export interface GetRegionByName$Params {
  region_name: string;

/**
 * jwt token of the user invoking this api
 */
  'bearer-token': string;
}

export function getRegionByName(http: HttpClient, rootUrl: string, params: GetRegionByName$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersRegionResponse>> {
  const rb = new RequestBuilder(rootUrl, getRegionByName.PATH, 'get');
  if (params) {
    rb.path('region_name', params.region_name, {});
    rb.header('bearer-token', params['bearer-token'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsersRegionResponse>;
    })
  );
}

getRegionByName.PATH = '/api/v1/regions/region_name/{region_name}';
