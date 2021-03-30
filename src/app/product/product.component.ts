import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
user_id:any;
session_name:any;
allproduct:any;

readonly url="http://localhost/angprod_api/";

 constructor(public http:HttpClient,private toastr: ToastrService) { }


  ngOnInit(): void {
    this.user_id = localStorage.getItem('user_id');
    
  this.session_name = localStorage.getItem('user_name');


  let form1: FormData = new FormData();
  
 
  this.http.get(this.url+'allproduct.php').subscribe((res:any)=>{
  
 
    this.allproduct=res['users'];
      
    console.log('ddddd',this.allproduct);

    
  });

}

cartData(data:any){
  // let cart:Cart=new Cart();
  
  let formData: FormData = new FormData();
  formData.append('user_id', `${localStorage.getItem('user_id')}`);	
  formData.append('prod_id', data);	
  this.http.post(this.url+'cart_add.php',formData).subscribe((res:any)=>{
    console.log('res res v',res);
    if (res['success']=='1') {
      this.toastr.success('Successfully!','Product Added!');
    }
    else{
      this.toastr.error('Something Wrong!', 'Product Not Added!');
    }
  });
}
cartRemoveitem(id:any){
  if (confirm('Are you sure remove item?')==true) {
    let formData: FormData = new FormData();
    formData.append('id',id);

    this.http.post(this.url+'delete_cart.php',formData).subscribe((data)=>{
      console.log(data);
     
    });
  }
}




  }
