import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {DBService} from './services/db.service';


@Injectable()
export class MyCanActivateGuard implements CanActivate {
 id;
 data;
 status:boolean=false;
 constructor(private dbs: DBService, private router:Router){
   console.log('hi');
   this.data=this.dbs.getData();
 }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log(route);
    console.log(state);
    console.log('hello');
    this.id=parseInt(route.params.id);
    for(let x of this.data){
      if(x._id==this.id) this.status=true;
    }
    if(this.id!=null && this.status)
    return true;
    else this.router.navigate(["/"]);
  }
}
