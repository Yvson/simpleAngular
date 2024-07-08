import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class WindowService {

  pathname(): string {
    return window.location.pathname;
  }

  href(): string {
    return window.location.href;
  }

  origin(): string {
    return window.location.origin;
  }

}
