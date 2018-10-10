import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent } from './products/products.component';
import { Ng2PaginationModule } from 'ng2-pagination';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.router';
import { NgxLoadingModule } from 'ngx-loading';
@NgModule({
  imports: [
    CommonModule, Ng2PaginationModule, RouterModule.forChild(HomeRoutes),NgxLoadingModule.forRoot({})
  ],
  declarations: [DashboardComponent, SettingsComponent, ProductsComponent],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
