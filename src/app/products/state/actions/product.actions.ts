import { createAction, props } from "@ngrx/store";
import { ProductAddDto } from "../../models/product-add.dto";
import {Product} from "../../models/product.model";

export enum ProductActionTypes {
  LOAD_PRODUCTS = '[PRODUCTS] Load products',
  ADD_PRODUCT = '[PRODUCTS] Add product',
  DELETE_PRODUCT = '[PRODUCTS] Delete product',
  UPDATE_PRODUCT = '[PRODUCTS] Update product'
}

export const loadProducts = createAction(ProductActionTypes.LOAD_PRODUCTS);
export const addProduct = createAction(
  ProductActionTypes.ADD_PRODUCT,
  props<{ credentials: ProductAddDto }>()
);
export const deleteProduct = createAction(
  ProductActionTypes.DELETE_PRODUCT,
  props<{ id: number }>()
)

export const updateProduct = createAction(
  ProductActionTypes.UPDATE_PRODUCT,
  props<{ product: Product }>()
)
