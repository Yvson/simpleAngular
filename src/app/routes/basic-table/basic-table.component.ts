import { Component } from '@angular/core';
import { University } from "shared/domain/entities/university.entity";
import { UniversityService } from "shared/services/university/university.service";
import { Observable } from "rxjs";
import { CommonModule } from "@angular/common";
import {HttpClientModule, HttpResponse} from "@angular/common/http";
import {AppUtils} from "app/app.utils";

@Component({
  selector: 'app-basic-table',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UniversityService,
  ],
  templateUrl: './basic-table.component.html',
  styleUrl: './basic-table.component.css'
})
export class BasicTableComponent {
  universities?: Observable<University[]>;
  baseAppUrl?: string;

  constructor(
    private universityService: UniversityService,
    appUtils: AppUtils
  ) {
    this.baseAppUrl = appUtils.getBaseAppUrl("");
  }

  ngOnInit(): void {
    this.universities = this.universityService.getUniversities();
  }
}
