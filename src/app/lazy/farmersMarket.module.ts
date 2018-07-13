import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { LazyComponent } from './lazy.component';
import {DBService} from './services/db.service';
import { FarmsComponent } from './farms.component';
import { RouterModule } from '@angular/router';
import { FarmDetailsComponent } from './farm-details.component';
import { CommonModule } from '@angular/common';
import {MyCanActivateGuard} from './mycanactivate.guard';


export const LAZY_ROUTES = [{ path: '', component: LazyComponent },{path:'farm/:id',component:FarmDetailsComponent,canActivate: [MyCanActivateGuard]},
{path:'farm',component:FarmDetailsComponent,canActivate: [MyCanActivateGuard]}];
export const FARMS_ROUTE=[{path:'farms/:id',component:FarmsComponent, canActivate: [MyCanActivateGuard]}];

@NgModule({
  declarations: [
    LazyComponent,
    FarmsComponent,
    FarmDetailsComponent
  ],
  imports: [
    
    CommonModule,
    RouterModule.forChild(LAZY_ROUTES)
  ],
  providers: [DBService,MyCanActivateGuard],
  bootstrap: [LazyComponent]
})
export class FarmersMarketModule { }
