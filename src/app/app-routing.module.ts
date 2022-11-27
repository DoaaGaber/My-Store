import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SucessfulPageComponent } from './components/sucessful-page/sucessful-page.component';

const routes: Routes = [

  { path: "products", component:ProductListComponent },
  { path: "cart", component: CartComponent},
  {path:"product-details",component:ProductDetailsComponent},
  {path:"sucesssfulProcessing" ,component:SucessfulPageComponent},
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  {path: 'success/:username', component: SucessfulPageComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
