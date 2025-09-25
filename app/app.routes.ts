import { Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { ApiComponent } from './pages/api/api.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { AngularComponent } from './pages/angular/angular.component';
import { AddComponent } from './pages/add/add.component';
import { HomeComponent } from './home/home.component';
import { ConverterComponent } from './converter/converter.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DepComponent } from './dep/dep.component';
import { ProfileComponent } from './profile/profile.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { HeaderComponent } from './header/header.component';
import { SignalComponent } from './signal/signal.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceeeeeeeComponent } from './invoiceeeeeee/invoiceeeeeee.component';
import { ApiPracticeComponent } from './api-practice/api-practice.component';



export const routes: Routes = [
     {
        path:'',
        redirectTo:"login",
        pathMatch:'full'
    },
    
    {
        path:'user-page',
        component:UserComponent
    },
    {
        path:'binding',
        component:DataBindingComponent
    },
    {
        path:'api',
        component:ApiComponent
    },
    {
        path:'Api-Practice',
        component:ApiPracticeComponent
    },
    {
        path:'reactive-form',
        component:ReactiveFormComponent
    },
    {
        path:'angular',
        component:AngularComponent
    },
    {
        path:'add',
        component:AddComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'converter',
        component:ConverterComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'dep',
        component:DepComponent
    },
    {
        path:'profile',
        component:ProfileComponent
    },
    {
        path:'todo-list',
        component:TodoListComponent
    },
{
    path:'navbar',
    component:NavbarComponent
},
{
    path:'built-in-pipes',
    component:BuiltInPipesComponent
},
{
    path:'header',
    component:HeaderComponent
},
{
    path:'signal',
    component:SignalComponent
},
{
    path:'invoice',
    component:InvoiceComponent
},
    {
path:'inn',
component:InvoiceeeeeeeComponent
    }


];
