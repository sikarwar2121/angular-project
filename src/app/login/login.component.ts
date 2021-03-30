import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { from } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {



  readonly url="http://localhost/angprod_api/";

  id:any;


  constructor(public http:HttpClient,public router:Router)
  
  { }

  ngOnInit(): void {


  }


  onClickSubmit(data:any) {
  
    let form1: FormData = new FormData();
  
    form1.append('uemail',data.uemail);
    form1.append('upass',data.upass);
    this.http.post(this.url+'login.php',form1).subscribe((res:any)=>{
    
      console.log(res['data']['id']);
    

      localStorage.setItem("user_id",res['data']['id']); // setting

      localStorage.setItem("user_name",res['data']['name']); // setting
      
      console.log(localStorage.getItem('user_id')); // getting
      
      this.router.navigate(["/product"]);  
      
    });
  }



}
