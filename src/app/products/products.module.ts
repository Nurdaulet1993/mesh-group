import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { ProductRoutingModule } from "./product-routing.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { ProductEffects } from "./state/product.effects";
import { reducer } from "./state/product.reducer";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditDialogComponent } from './product-edit-dialog/product-edit-dialog.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    ProductRoutingModule.components,
    ProductListComponent,
    ProductAddComponent,
    ProductEditDialogComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    StoreModule.forFeature('productState', reducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductsModule { }
