import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatActivityService {

  apiUrl : string = "http://localhost/final/process/crud_cateactivity.php?cmd=select";
  constructor(public http: HttpClient) 
  { }

  getCatAtivity(){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'select'
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }

  get(s_id : any){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'selectone',
      's_id' : s_id
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }
  
  insert( s_name: string, s_price: any){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'insert',
      's_name': s_name,
      's_price': s_price
      
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }

  del( s_id : any){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'delete',
      's_id' : s_id
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
  
  edit( s_id: any , s_name: string, s_price:any	){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'edit',
      's_id' : s_id ,
      's_name': s_name,
      's_price': s_price,
     
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
}
