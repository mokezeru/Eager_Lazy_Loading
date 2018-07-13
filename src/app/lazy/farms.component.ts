import { Component, OnInit } from '@angular/core';
import {DBService} from './services/db.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-farms',
  template: `
    <ul>
      
      <li *ngFor="let farm of farms"><a [routerLink]="['farm',farm._id]">{{farm.farm}}</a></li>
                 
    </ul>
  `,
  styles: []
})
export class FarmsComponent implements OnInit {
  farms;
  i=1;
  constructor(private dbs : DBService) { }

  ngOnInit() {
    this.farms = this.dbs.getData();
  }

}
