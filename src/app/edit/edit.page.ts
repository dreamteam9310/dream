import { Component, OnInit } from '@angular/core';
import {CatActivityService} from '../services/cat-activity.service';
//import {Subscription} from 'rxjs/Subscription';
import { Subscription } from 'rxjs';
import {Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  subscription : Subscription;
  dataList : any = [];
  dataRow = 0;
  s_id : string;

  constructor(private catActSV : CatActivityService ,private route:Router,private router: ActivatedRoute) {
    this.showData(); 
  }
  showData(){
    let s_id = this.s_id = (this.router.snapshot.paramMap.get('s_id'));
    this.subscription=this.catActSV.get(s_id)
    .subscribe(
      data =>{
        this.dataList = data['rs'];
      }
    )
  }

  edit(form) {
    let s_id = this.s_id = (this.router.snapshot.paramMap.get('s_id'));
    let s_name = form.s_name;
    let s_price = form.s_price;
    
    this.catActSV.edit(s_id , s_name, s_price).subscribe(
      
       );
       this.route.navigateByUrl("home");
       console.log(s_id  + s_name + s_price);
       
  }

  ngOnInit() {
  }

}