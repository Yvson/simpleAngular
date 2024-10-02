import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDataComponent } from './table-data.component';
import { TableDataFactoryComponent } from './subcomponents/table-data-factory/table-data-factory.component';
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatIconModule } from "@angular/material/icon";



@NgModule({
  declarations: [
    TableDataComponent,
    TableDataFactoryComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatIconModule
  ],
  exports: [
    TableDataComponent,
    TableDataFactoryComponent
  ]
})
export class TableDataModule { }
