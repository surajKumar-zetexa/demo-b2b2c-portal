/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersEkycDocumentOptions } from '../../models/users-ekyc-document-options';

export interface GetSupportedDocumentsForCountry$Params {
  country: string;
  'bearer-token'?: string;
}

export function getSupportedDocumentsForCountry(http: HttpClient, rootUrl: string, params: GetSupportedDocumentsForCountry$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersEkycDocumentOptions>> {
  const rb = new RequestBuilder(rootUrl, getSupportedDocumentsForCountry.PATH, 'get');
  if (params) {
    rb.path('country', params.country, {});
    rb.header('bearer-token', params['bearer-token'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsersEkycDocumentOptions>;
    })
  );
}

getSupportedDocumentsForCountry.PATH = '/api/v1/countries/{country}/ekyc_docs';
