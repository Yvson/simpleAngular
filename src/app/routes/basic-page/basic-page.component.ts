// Angular
import { Component, Input } from '@angular/core';

// Utils
import { AppUtils } from "app/app.utils";

const inputs = {
  "string": "string-text",
  "number": "152.02",
  "boolean": "true",
  "array": ["1", "2", "3", "4", "5"],
  "object": {
    "string": "string-text",
    "number": "152.02",
    "boolean": "true",
    "array": ["1", "2", "test", "4", "5"],
    "object": {
      "array": ["10"],
      "string": "string-text",
      "number": "152.02",
      "boolean": "true",
      "object": {
        "array": ["last", "object", "more", "test"],
        "string": "string-text",
        "number": "152.02",
        "boolean": "true",
      }
    }
  },
}

@Component({
  selector: 'basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {
  baseAppUrl?: string;
  @Input( { required: true }) values: { [key: string]: unknown } = inputs;

  constructor(appUtils: AppUtils) {
    this.baseAppUrl = appUtils.getBaseAppUrl(location.pathname);
  }
}
