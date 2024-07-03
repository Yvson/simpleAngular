import { Injectable } from '@angular/core';
import { HttpBaseService } from "shared/common/services/http-base/http-base.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "environments/environment";
import {University} from "shared/domain/entities/university.entity";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UniversityService extends HttpBaseService {

  constructor(http: HttpClient) {
    super(environment.universityApiRoute, http);
  }

  getUniversities(): Observable<Array<University>> {
    return this.get<Array<University>>("search?country=United+States&limit=20");
  }
}
