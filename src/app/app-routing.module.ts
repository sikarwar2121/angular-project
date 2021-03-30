import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import{ HomeComponent } from './home/home.component';
import{LoginComponent} from './login/login.component'

import{ CartComponent } from './cart/cart.component';
import{ProductComponent} from './product/product.component'

import{ProductdetailComponent} from  './productdetail/productdetail.component'


import{ ProfileComponent } from './profile/profile.component';

import{UserprofileComponent} from './userprofile/userprofile.component';
import { RegComponent } from './reg/reg.component';
import{WishlistComponent} from './wishlist/wishlist.component'

import{UploadroductComponent} from './uploadroduct/uploadroduct.component'
import{AllproductComponent} from './allproduct/allproduct.component'


const routes: Routes = [
	{
		path:'',
		component: HomeComponent 
	},
  {
		path:'login',
		component: LoginComponent 
	},
  {
		path:'reg',
		component: RegComponent
	},
  {
		path:'product',
		component: ProductComponent 
	},
	{
		path:'allproduct',
		component: AllproductComponent 
	},
  {
		path:'productdetail/:_id',
		component: ProductdetailComponent 
	},
  {
		path:'cart',
		component: CartComponent 
	},

  {
		path:'profile',
		component: ProfileComponent 
	},

	{
		path:'uploadproduct',
		component: UploadroductComponent
	},

	{
		path:'wishlist',
		component: WishlistComponent 
	},
  {
		path:'userprofile',
		component: UserprofileComponent 
	}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
