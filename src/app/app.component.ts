import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<p>welcome </p>
  <a [routerLink]="['/']">Home</a> <br>
  <a [routerLink]="['farmersmarket']">Farmers Market</a>
  <router-outlet></router-outlet>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application';
}
