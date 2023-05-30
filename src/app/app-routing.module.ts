import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductAddComponent } from './admin/product/product-add/product-add.component';
import { ProductEditComponent } from './admin/product/product-edit/product-edit.component';
import { ProductListComponent } from './admin/product/product-list/product-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {path:'', component:AdminLayoutComponent, children:
[
  {path:'admin', component:DashboardComponent},
  {path: 'admin/product', component:ProductListComponent},
  {path: 'admin/product/add', component: ProductAddComponent},
  {path:'admin/product/:id/edit', component: ProductEditComponent},
]},
  
  {path:'**', component:NotFoundComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
