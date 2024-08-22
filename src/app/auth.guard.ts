import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const localstoreValue = localStorage.setItem("token", "1");
  return true;
};
