import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduserveService {

readonly url="http://localhost/angprod_api/";

constructor(public http:HttpClient) { }

  uploadproduct(){
    
    this.http.get(this.url+'uploadproduct.php');
  }

  register(){
    this.http.get(this.url+'add-user.php');

  }
  login(){
    this.http.get(this.url+'login.php');

  }
  allproduct()
  {
    this.http.get(this.url+'allproduct.php');

  }

  cart(form:any)
  {
    this.http.get(this.url+'cart.php',form);

  }



}
