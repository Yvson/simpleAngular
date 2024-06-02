import { Routes } from '@angular/router';
import { BasicFormComponent } from "routes/basic-form/basic-form.component";
import { BasicPageComponent } from "routes/basic-page/basic-page.component";
import { BasicTableComponent } from "routes/basic-table/basic-table.component";

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
  }
];
