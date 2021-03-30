import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

  constructor(public http:HttpClient) { }
  readonly url="http://localhost/angprod_api/";
  ngOnInit(): void {
  }

  

}
