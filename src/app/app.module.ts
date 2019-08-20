import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PrettyJsonModule} from 'angular2-prettyjson';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartService } from './services/cart.service';
import { HttpClient , HttpClientModule} from '@angular/common/http';
import { PaymentService } from './payment.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PrettyJsonModule
  ],
  providers: [
    CartService,
    PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
