// Angular
import { NgModule } from "@angular/core";
import {Router, RouterModule, ROUTES, Routes} from '@angular/router';

// Components
import { BasicFormComponent } from "routes/basic-form/basic-form.component";
import { BasicPageComponent } from "routes/basic-page/basic-page.component";
import { BasicTableComponent } from "routes/basic-table/basic-table.component";

// Services
import { WindowService } from "shared/common/services/window/window.service";

// Utils
import { AppUtils } from "app/app.utils";
import {CommonModule} from "@angular/common";


const appUtils = new AppUtils(new WindowService());

export const initialRoutes: Routes = [
  {
    path: "",
    children: [
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
    ]
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

export const routeFactoryNew = (
  routes: Routes,
  deps: [WindowService],
  config = {}
): Routes => {
  return routes;
}


@NgModule({
  imports: [RouterModule.forRoot(initialRoutes)],
  exports: [RouterModule],
  providers: [
    {
      provide: ROUTES,
      useFactory: (windowService: WindowService) => {
        const routes = routeFactoryNew(initialRoutes, [windowService]);

        routes[0].children!.push({ path: "form-dynamic", component: BasicFormComponent });
        routes[0].children!.push({ path: "groups-dynamic", component: BasicTableComponent });

        return routes;
      },
      multi: true,
      deps: [WindowService]
    }
  ],
})
export class AppRoutingModule {}

