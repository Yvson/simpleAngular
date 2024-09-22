// Angular
import { Component, Input } from '@angular/core';

// Utils
import * as _ from 'lodash';


@Component({
  selector: 'table-data-factory',
  templateUrl: './table-data-factory.component.html',
  styleUrls: ['./table-data-factory.component.scss']
})
export class TableDataFactoryComponent {
  @Input( { required: true }) value!: any;
  @Input( { required: false }) changes?: { [key: string]: boolean };
  @Input( { required: false }) fields?: unknown; // TOfferInputs | TOfferOutputs;
  @Input( { required: false }) level?: number;
  @Input( { required: false }) type?: unknown; // TOfferInputType;

  public getValueType(value: unknown): string {
    return typeof value;
  }

  public isArray(object: unknown): boolean {
    return _.isArray(object);
  }

  public transformKeysToArray(object: Record<string, unknown>): Array<any> {
    return Object.keys(object);
  };

  public capitalizeFirstLetter(string: string): string {
    return _.capitalize(string);
  };

}
