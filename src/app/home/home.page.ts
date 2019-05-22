import { Component } from '@angular/core';
import {CatActivityService} from '../services/cat-activity.service';
//import {Subscription} from 'rxjs/Subscription';
import { Subscription } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';
import { insertView } from '@ionic/angular/dist/directives/navigation/stack-utils';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  subscription : Subscription;
  dataList : any = [];

  constructor(private catActSV:CatActivityService , private route:Router){
    this.showData();
  }

  showData(){
    this.subscription = this.catActSV.getCatAtivity()
    .subscribe(data=>{
      this.dataList= data['rs'];
    })
  }
  adddata(){
    this.route.navigateByUrl("add");
    
  }
  
  deletedata(s_id){
    this.catActSV.del(s_id).subscribe();
    console.log(s_id);
  }
  
  edit(s_id){
    this.route.navigate(['/edit',{s_id : s_id}]);
    console.log(s_id);
  }
  
  }
  
  
  
  