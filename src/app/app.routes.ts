import { Routes } from '@angular/router';
import { BasicFormComponent } from "routes/basic-form/basic-form.component";
import { BasicPageComponent } from "routes/basic-page/basic-page.component";
import { BasicTableComponent } from "routes/basic-table/basic-table.component";
import {checkStateGuard} from "shared/common/guards/state.guard";

export const routes: Routes = [
  {
    path: "",
    canActivateChild: [checkStateGuard],
    children: [
      {
        path: "",
        component: BasicPageComponent
      },
      {
        path: "form",
        component: BasicFormComponent
      },
      {
        path: "table",
        component: BasicTableComponent
      }
    ]
  },
];
