import { Routes } from '@angular/router';
import { BasicFormComponent } from "routes/basic-form/basic-form.component";
import { BasicPageComponent } from "routes/basic-page/basic-page.component";
import { BasicTableComponent } from "routes/basic-table/basic-table.component";
import {AppUtils} from "app/app.utils";
import {WindowService} from "shared/common/services/window/window.service";

const appUtils = new AppUtils(new WindowService());

export const routes: Routes = [
  {
    path: "",
    component: BasicPageComponent,
  },
  {
    path: "form",
    component: BasicFormComponent
  },
  {
    path: "table",
    component: BasicTableComponent
  },
  {
    path: appUtils.getBaseAppUrl("groups"),
    children: [
      {
        path: "abc",
        component: BasicTableComponent
      }
    ]
  }
];
