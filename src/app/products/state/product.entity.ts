import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Product } from "../models/product.model";

export interface ProductEntityState extends EntityState<Product> {}

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();

const { selectAll, selectEntities } = productAdapter.getSelectors();

export const selectAllProducts = selectAll;
export const selectProductEntities = selectEntities;
