import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {AppUtils} from "app/app.utils";
import {WindowService} from "shared/common/services/window/window.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
