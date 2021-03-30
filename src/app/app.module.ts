import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { RegComponent } from './reg/reg.component';
import { ProfileComponent } from './profile/profile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

import { UploadroductComponent } from './uploadroduct/uploadroduct.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AllproductComponent } from './allproduct/allproduct.component';

import { AlluserComponent } from './alluser/alluser.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegComponent,
    ProfileComponent,
    UserprofileComponent,
    ProductComponent,
    ProductdetailComponent,
    CartComponent,
    WishlistComponent,
    UploadroductComponent,
    AllproductComponent,
    AlluserComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
