import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  readonly url="http://localhost/angprod_api/";
  productdetails:any;
  constructor(public http:HttpClient,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      console.log('id    ',params['_id']);
      this.http.get(this.url+'get_prod_detail.php?id='+params['_id']).subscribe((res:any)=>{
        console.log('res res v',res);
        this.productdetails=res['productdetail'];
      })
    })
  }

}
