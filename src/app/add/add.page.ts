import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CatActivityService} from '../services/cat-activity.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private catActSV : CatActivityService ,private route:Router) { }
 
  ngOnInit() {
  }
  insert(form) {
    let s_name = form.s_name;
    let s_price = form.s_price;
   
    
    this.catActSV.insert(s_name, s_price).subscribe(
      
       );
       this.route.navigateByUrl("home");
       
  }

}
