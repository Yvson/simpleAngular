import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";

export const checkStateGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);

  if (router.getCurrentNavigation()?.extras?.state?.['membership'] === "free") {
    router.navigate(['/table']);
    return false;
  }
  return true;
}
