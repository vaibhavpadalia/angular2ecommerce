import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';

const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'signin', component: LoginComponent },
    { path: '', component: WelcomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'products', component: ProductPageComponent},
    { path: 'productdetails', component: ProductDetailsComponent},
    { path: 'productdetails/:p_head/:p_name/:p_price/:p_des/:p_img', component: ProductDetailsComponent},
    { path: 'details', component: UserDetailsComponent},
    { path: 'edit', component: EditDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [SignupComponent, WelcomeComponent,
    LoginComponent, ProductDetailsComponent, EditDetailsComponent, UserDetailsComponent];
