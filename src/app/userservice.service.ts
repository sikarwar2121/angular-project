import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // let cart:formData=new FormData();
  constructor(private http:HttpClient) { 

  }
  url="http://localhost/angprod_api/";

  
    
}
