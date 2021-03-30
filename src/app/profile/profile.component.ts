import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  readonly url="http://localhost/angprod_api/";

  constructor(private http:HttpClient,private route:ActivatedRoute) { 


  }

  user_id:any
  name:any;
  passwd:any;
  email:any;
  session_name:any;

  ngOnInit() {
    this.user_id = localStorage.getItem('user_id');

    this.session_name = localStorage.getItem('user_name');
    // console.log(this.user_id);
    let form1:FormData=new FormData();
    form1.append('id',this.user_id);
    this.http.post(this.url+'update-user.php',form1).subscribe((res:any)=>{
      this.name=res['data']['name'];
      this.email=res['data']['email'];
      this.passwd=res['data']['password'];
      
    })

  }

  profileUpdate(data:any) {
    console.log(this.user_id);
    console.log(data.email);

    let form:FormData=new FormData();
    form.append('name',data.username);
    form.append('email',data.email);
    form.append('password',data.passwd);
    form.append('id',this.user_id);
    this.http.post(this.url+'update-user.php',form).subscribe((res)=>{
      console.log(res)
    })
  }


}
