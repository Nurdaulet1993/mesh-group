import { createReducer, Action, on } from "@ngrx/store";
import { ProductActions, ProductApiActions } from './actions';
import { ProductEntityState, productAdapter } from "./product.entity";

export interface ProductState {
  productEntities: ProductEntityState
}

export const initialState: ProductState = {
  productEntities: productAdapter.getInitialState()
}

const productReducer = createReducer(
  initialState,
  on(ProductApiActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    productEntities: productAdapter.setAll(products, state.productEntities)
  })),
  on(ProductApiActions.addProductSuccess, (state, { product }) => ({
    ...state,
    productEntities: productAdapter.addOne(product, state.productEntities)
  })),
  on(ProductApiActions.deleteProductSuccess, (state, { id }) => ({
    ...state,
    productEntities: productAdapter.removeOne(id, state.productEntities)
  }))
)

export function reducer(state: ProductState | undefined, action: Action): ProductState {
  return productReducer(state, action);
}
