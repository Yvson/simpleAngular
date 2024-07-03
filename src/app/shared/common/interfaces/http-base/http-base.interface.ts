import {Observable} from "rxjs";
import {HttpHeaders} from "@angular/common/http";

export interface IHttpBaseService {
  get<T>(apiRoute: string, authorizationHeader?: string): Observable<T>;

  post<T>(apiRoute: string, body: any, authorizationHeader?: string): Observable<T>;

  put<T>(apiRoute: string, body: any, authorizationHeader?: string): Observable<T>;

  delete<T>(apiRoute: string, authorizationHeader?: string): Observable<T>;

  getHttpHeaders(key: string, value: string): HttpHeaders;
}
