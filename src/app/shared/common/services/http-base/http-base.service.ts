import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {IHttpBaseService} from "shared/common/interfaces/http-base/http-base.interface";
import {Observable} from "rxjs";


export class HttpBaseService implements IHttpBaseService {
  private readonly http: HttpClient;
  private readonly baseUrl: string;

  constructor(baseUrl: string , http: HttpClient) {
    this.http = http;
    this.baseUrl = baseUrl;
  }

  get<T>(apiRoute: string, authorizationHeader?: string): Observable<T> {
    return this.http.get<T>(
      `${this.baseUrl + apiRoute}`,
      { headers: this.getHttpHeaders("Authorization", authorizationHeader) });
  }

  post<T>(apiRoute: string, body: any, authorizationHeader?: string): Observable<T> {
    return this.http.post<T>(
      `${this.baseUrl + apiRoute}`,
      body,
      { headers: this.getHttpHeaders("Authorization", authorizationHeader) });
  }

  put<T>(apiRoute: string, body: any, authorizationHeader?: string): Observable<T> {
    return this.http.put<T>(
      `${this.baseUrl + apiRoute}`,
      body,
      { headers: this.getHttpHeaders("Authorization", authorizationHeader) });
  }

  delete<T>(apiRoute: string, authorizationHeader?: string): Observable<T> {
    return this.http.delete<T>(
      `${this.baseUrl + apiRoute}`,
      { headers: this.getHttpHeaders("Authorization", authorizationHeader) });
  }

  getHttpHeaders(key: string, value?: string): HttpHeaders {
    return new HttpHeaders().set(key, value ? value : "");
  }
}
