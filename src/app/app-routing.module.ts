import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

//router-outlet de neyin gözterileceğini verdiğimiz yer
const routes: Routes = [
  { path: "", pathMatch: "full", component: ProductComponent },
  { path: "products", component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
