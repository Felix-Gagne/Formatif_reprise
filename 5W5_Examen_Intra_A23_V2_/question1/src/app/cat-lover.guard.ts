import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { inject } from '@angular/core';

export const catLoverGuard: CanActivateFn = (route, state) => {
  if(inject(UserService).currentUser?.prefercat == false){
    return createUrlTreeFromSnapshot(route, ['/dog']);
  }
  else{
    return true;
  }
};
