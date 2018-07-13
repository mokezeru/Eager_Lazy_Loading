import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';

import {FarmersMarketModule, LAZY_ROUTES} from './lazy/farmersMarket.module';
import { HomeComponent } from './home.component';

const APP_ROUTES:Routes=[{path:'',component:HomeComponent},
                        {path:'home',component:HomeComponent},
                        {path:'farmersmarket',loadChildren:'./lazy/farmersMarket.module#FarmersMarketModule'}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
