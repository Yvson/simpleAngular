// Angular
import { Component, Input } from '@angular/core';

// Utils
import * as _ from 'lodash';


@Component({
  selector: 'table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
})
export class TableDataComponent {
  @Input( { required: true }) title!: string;
  @Input( { required: true }) values!: any;
  @Input( { required: false }) changes?: { [key: string]: boolean };
  @Input( { required: false }) defaultType?: "table" | "json" = "table";
  @Input( { required: false }) fields?: unknown; // TOfferInputs | TOfferOutputs;

  public isEmpty(arg: unknown): boolean {
    return _.isEmpty(arg);
  };

}
