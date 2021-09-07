import { createAction, props } from "@ngrx/store";
import {Product} from "../../models/product.model";

export enum ProductApiActionTypes {
  LOAD_PRODUCTS_SUCCESS = '[PRODUCTS] Load products success',
  LOAD_PRODUCTS_ERROR = '[PRODUCTS] Load products error',
  ADD_PRODUCT_SUCCESS = '[PRODUCTS] Add product success',
  ADD_PRODUCT_ERROR = '[PRODUCTS] Add product error',
  DELETE_PRODUCT_SUCCESS = '[PRODUCTS] Delete product success',
  DELETE_PRODUCT_ERROR = '[PRODUCTS] Delete product error',
  UPDATE_PRODUCT_SUCCESS = '[PRODUCTS] Update product success',
  UPDATE_PRODUCT_ERROR = '[PRODUCTS] Update product error',
}

export const loadProductsSuccess = createAction(
  ProductApiActionTypes.LOAD_PRODUCTS_SUCCESS,
  props<{ products: Product[] }>()
)

export const addProductSuccess = createAction(
  ProductApiActionTypes.ADD_PRODUCT_SUCCESS,
  props<{ product: Product }>()
)

export const deleteProductSuccess = createAction(
  ProductApiActionTypes.DELETE_PRODUCT_SUCCESS,
  props<{ id: number }>()
)

export const updateProductSuccess = createAction(
  ProductApiActionTypes.LOAD_PRODUCTS_SUCCESS,
  props<{ product: Product }>()
)
