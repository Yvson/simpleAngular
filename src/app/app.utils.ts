// Angular
import {EnvironmentInjector, inject, Injectable, runInInjectionContext} from "@angular/core";

// Services
import {WindowService} from "shared/common/services/window/window.service";

// Utils
import _ from 'lodash';

@Injectable({
  providedIn: "root",
})
export class AppUtils {
  private windowService: WindowService;

  constructor(windowService: WindowService) {
    this.windowService = windowService;
  }

  getBaseAppUrl(appSubPath: string): string {
    let baseAppUrl: string;
    const baseAppUrlArray: string[] = [];
    let allSubPaths: string[];

    allSubPaths = this.windowService.pathname().split("/").filter(i => !_.isEmpty(i));
    for (let i: number = 0; i < allSubPaths.length; i++) {
      baseAppUrlArray.push(allSubPaths[i]);
      if (i >= 2) {
        if (allSubPaths[i] === appSubPath) {
          break;
        };
      }
    }
    baseAppUrl = baseAppUrlArray.filter(i => !_.isEmpty(i)).join("/");

    return baseAppUrl;
  }
}


