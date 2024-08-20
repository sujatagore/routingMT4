import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './shared/components/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { UsersComponent } from './shared/components/users/users.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { FairsComponent } from './shared/components/fairs/fairs.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { UserformComponent } from './shared/components/users/userform/userform.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { ProductformComponent } from './shared/components/products/productform/productform.component';
import { FaircardsComponent } from './shared/components/fairs/faircards/faircards.component';
import { FairdetailsComponent } from './shared/components/fairs/fairdetails/fairdetails.component';
import { MaterialModule } from './shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UsersComponent,
    PagenotfoundComponent,
    ProductsComponent,
    FairsComponent,
    AuthComponent,
    UserComponent,
    UserformComponent,
    ProductComponent,
    ProductformComponent,
    FaircardsComponent,
    FairdetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
