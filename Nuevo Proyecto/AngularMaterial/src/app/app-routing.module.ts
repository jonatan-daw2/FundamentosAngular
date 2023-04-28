import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Option1Component } from './option1/option1.component';
import { MenuDesplegableComponent } from './menu-desplegable/menu-desplegable.component';
import { Option2Component } from './option2/option2.component';
import { Option3Component } from './option3/option3.component';
import { Option4Component } from './option4/option4.component';
import { Option5Component } from './option5/option5.component';

const routes: Routes = [{path: "", component: MenuDesplegableComponent, children:[
                        {path: "option1", component: Option1Component},
                        {path: "option2", component: Option2Component},
                        {path: "option3", component: Option3Component},
                        {path: "option4", component: Option4Component},
                        {path: "option5", component: Option5Component}
                        ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
