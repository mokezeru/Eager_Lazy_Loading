import { Component, OnInit } from '@angular/core';
import { DBService } from './services/db.service';

@Component({
  selector: 'app-lazy',
  template: `
    <div>
      <ul>
        <li *ngFor ="let f of farmersData">
        Farm Name: {{f.farm}} 
        <br>
        Type of produce: {{f.produce}}
        </li>
      </ul>
      <app-farms></app-farms>
    </div>
  `,
  styles: []
})
export class LazyComponent implements OnInit {
 farmersData;
  constructor(private dbs :DBService) { }

  ngOnInit() {
    this.farmersData =this.dbs.getData();
  }

}
