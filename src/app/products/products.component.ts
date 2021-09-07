import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { State } from "./state";
import { ProductAddDto } from "./models/product-add.dto";
import {addProduct, deleteProduct, loadProducts, updateProduct} from "./state/actions/product.actions";
import { selectProducts } from "./state";
import {Product} from "./models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$ = this.store.select(selectProducts);

  constructor(
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

  addProduct(credentials: ProductAddDto): void {
    this.store.dispatch(addProduct({ credentials }));
  }

  onDelete(id: number): void {
    this.store.dispatch(deleteProduct({ id }));
  }

  onUpdate(product: Product): void {
    console.log(product);
    this.store.dispatch(updateProduct({ product }));
  }
}
