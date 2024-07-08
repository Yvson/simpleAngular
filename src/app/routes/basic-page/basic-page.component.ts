import { Component } from '@angular/core';
import {AppUtils} from "app/app.utils";

@Component({
  selector: 'basic-page',
  standalone: true,
  imports: [],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {
  baseAppUrl?: string;

  constructor(appUtils: AppUtils) {
    this.baseAppUrl = appUtils.getBaseAppUrl(location.pathname);
  }
}
