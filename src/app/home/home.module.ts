import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent } from './products/products.component';
import {Ng2PaginationModule} from 'ng2-pagination';

@NgModule({
  imports: [
    CommonModule,Ng2PaginationModule
  ],
  declarations: [DashboardComponent, SettingsComponent, ProductsComponent]
})
export class HomeModule { }
