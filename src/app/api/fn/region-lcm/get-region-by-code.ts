/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersRegionResponse } from '../../models/users-region-response';

export interface GetRegionByCode$Params {
  country_code: number;

/**
 * jwt token of the user invoking this api
 */
  'bearer-token': string;
}

export function getRegionByCode(http: HttpClient, rootUrl: string, params: GetRegionByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersRegionResponse>> {
  const rb = new RequestBuilder(rootUrl, getRegionByCode.PATH, 'get');
  if (params) {
    rb.path('country_code', params.country_code, {});
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

getRegionByCode.PATH = '/api/v1/regions/country_code/{country_code}';
