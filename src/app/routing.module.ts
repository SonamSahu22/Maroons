import { NgModule } from "@angular/core";
import{ Routes, RouterModule } from "@angular/router";
import { LoginpageComponent } from "./app/loginpage/loginpage.component";



const routes:Routes=[
    {path:'',component:LoginpageComponent},
    {path:'loginpage',component:LoginpageComponent}
   
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class RoutingModule{

}