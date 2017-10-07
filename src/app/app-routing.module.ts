import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'signin', component: LoginComponent },
    { path: '', component: WelcomeComponent },
    { path: 'signup', component: SignupComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [SignupComponent, WelcomeComponent, LoginComponent];
