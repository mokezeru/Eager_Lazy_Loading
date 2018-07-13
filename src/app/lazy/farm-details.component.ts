import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DBService } from './services/db.service';

@Component({
  selector: 'app-farm-details',
  template: `
    <p>
      Farm-Detail: <br>
      Farm Name : {{data.farm}} <br>
      produces : {{data.produce}}
    </p>
    
  `,
  styles: []
})
export class FarmDetailsComponent implements OnInit {
  private id:Number;
  private subscription: Subscription;
  private data;

  constructor(private ar: ActivatedRoute,private dbs:DBService) {
    this.subscription = ar.params.subscribe((params)=>this.id=parseInt(params['id']));
    console.log(this.id);
    var d = this.dbs.getData();
    for(let x of d){
      if(x._id==this.id) this.data=x;
    }
   }

  ngOnInit() {
  }

}
