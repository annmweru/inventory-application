import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {AddProductComponent} from "./product/add-product/add-product.component";
import {ViewProductComponent} from "./product/view-product/view-product.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products/add', component: AddProductComponent},
  { path: 'products/view/:id', component: ViewProductComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
