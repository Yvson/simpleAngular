import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDataComponent } from './table-data.component';
import { TableDataFactoryComponent } from './subcomponents/table-data-factory/table-data-factory.component';



@NgModule({
  declarations: [
    TableDataComponent,
    TableDataFactoryComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TableDataComponent,
    TableDataFactoryComponent
  ]
})
export class TableDataModule { }
