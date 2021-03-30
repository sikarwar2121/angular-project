import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  readonly url="http://localhost/angprod_api/";


  constructor(public http:HttpClient) 
  { 


  }

  ngOnInit(): void {


  }




onClickSubmit(data:any) {
  
    let form1: FormData = new FormData();
    form1.append('uname',data.uname);
    form1.append('uemail',data.uemail);
    form1.append('upass',data.upass);
    form1.append('day',data.day);
    form1.append('g',data.g);
   
    this.http.post(this.url+'add-user.php',form1).subscribe((res)=>{
      console.log(res);
      
    });
    // console.log(data.file_img);
    
    // console.log(this.file);
  }



}
