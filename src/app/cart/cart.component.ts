import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public http:HttpClient) { }


  readonly url="http://localhost/angprod_api/";


  ngOnInit(): void {

    let formData: FormData = new FormData();
    formData.append('user_id','1');

    // this.http.post(this.url+'get_cart_detail.php',formData).subscribe(data)=>{
    //   console.log(data);
    //   this.products=data;


  }

}
