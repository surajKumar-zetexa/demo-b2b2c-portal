/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersEkycStatusOptions } from '../../models/users-ekyc-status-options';

export interface GetStatusOptionsForEkyc$Params {
  'bearer-token'?: string;
}

export function getStatusOptionsForEkyc(http: HttpClient, rootUrl: string, params?: GetStatusOptionsForEkyc$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersEkycStatusOptions>> {
  const rb = new RequestBuilder(rootUrl, getStatusOptionsForEkyc.PATH, 'get');
  if (params) {
    rb.header('bearer-token', params['bearer-token'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsersEkycStatusOptions>;
    })
  );
}

getStatusOptionsForEkyc.PATH = '/api/v1/ekyc_status_options';
