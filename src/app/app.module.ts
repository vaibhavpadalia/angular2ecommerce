import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProductPageComponent } from './product-page/product-page.component';
import { GlobalService } from './global.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    ProductPageComponent,
    ProductDetailsComponent,
    SideBarComponent,
    UserDetailsComponent,
    EditDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
