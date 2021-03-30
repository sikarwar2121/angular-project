import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-uploadroduct',
  templateUrl: './uploadroduct.component.html',
  styleUrls: ['./uploadroduct.component.css']
})
export class UploadroductComponent implements OnInit {
  readonly url="http://localhost/angprod_api/";

  
  file:any; 
  // category:any;
  constructor(public http:HttpClient) { 
    
  }
  
  ngOnInit(): void {

  }
  onChange(event:any) { 
    this.file = event.target.files[0]; 
    
    // console.log(this.file);
  }


onClickSubmit(data:any) {
    let form1: FormData = new FormData();
    form1.append('category',data.cat);
    form1.append('name',data.name);
    form1.append('des',data.des);
    form1.append('price',data.price);
    form1.append('file',this.file,this.file.name);
    
    this.http.post(this.url+'uploadproduct.php',form1).subscribe((res)=>{
      console.log(res);
      
    });
    // console.log(data.file_img);
    
    // console.log(this.file);
  }

}
