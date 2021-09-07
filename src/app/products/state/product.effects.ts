import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from "../services/product.service";
import { ProductApiActions, ProductActions } from './actions';
import { catchError, map, mergeMap } from "rxjs/operators";
import { Product } from "../models/product.model";
import { EMPTY } from "rxjs";

@Injectable()
export class ProductEffects {

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.ProductActionTypes.LOAD_PRODUCTS),
    mergeMap(() => this.productService.products$.pipe(
      map((products: Product[]) => ({ type: ProductApiActions.ProductApiActionTypes.LOAD_PRODUCTS_SUCCESS, products })),
      catchError(error => EMPTY)
    )),
  ))

  addProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.addProduct),
    mergeMap(({ credentials }) => this.productService.addProduct(credentials).pipe(
      map(product => ({ type: ProductApiActions.ProductApiActionTypes.ADD_PRODUCT_SUCCESS, product })),
      catchError(error => EMPTY)
    ))
  ))

  deleteProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.deleteProduct),
    mergeMap(({ id }) => this.productService.deleteProduct(id).pipe(
      map(id => ({ type: ProductApiActions.ProductApiActionTypes.DELETE_PRODUCT_SUCCESS, id})),
      catchError(error => EMPTY)
    ))
  ))

  updateProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ProductActions.updateProduct),
    mergeMap(({product}) => this.productService.updateProduct(product).pipe(
      map((product) => ({ type: ProductApiActions.ProductApiActionTypes.UPDATE_PRODUCT_SUCCESS, product })),
      catchError(error => EMPTY)
    ))
  ))

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
