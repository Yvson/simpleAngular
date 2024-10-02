import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { AppComponent } from 'app/app.component';
import { AppRoutingModule } from "app/app.routes";

import { TableDataModule } from "shared/modules/table-data/table-data.module";
import {BasicPageComponent} from "routes/basic-page/basic-page.component";
import {HttpClientModule} from "@angular/common/http";
import {BasicTableComponent} from "routes/basic-table/basic-table.component";
import {BasicFormComponent} from "routes/basic-form/basic-form.component";


@NgModule({
  declarations: [
    AppComponent,
    BasicPageComponent,
    BasicTableComponent,
    BasicFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TableDataModule,
    HttpClientModule
  ],
  exports: [
    TableDataModule,
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
