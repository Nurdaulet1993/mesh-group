import * as AppState from '../../state';
import { ProductState } from "./product.reducer";
import { selectAllProducts } from "./product.entity";
import { createSelector } from "@ngrx/store";

export interface State extends AppState.State {
  productState: ProductState
}

export const selectProductState = (state: State) => state.productState;
export const selectProductEntityState = createSelector(
  selectProductState,
  (state: ProductState) => state.productEntities
)

export const selectProducts = createSelector(
  selectProductEntityState,
  selectAllProducts
);


