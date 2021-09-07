import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product.model";
import { ProductAddDto } from "../models/product-add.dto";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = ' http://localhost:3000';

  constructor(
    private http: HttpClient
  ) {}

  products$ = this.http.get<Product[]>(`${this.baseUrl}/products`);

  addProduct(credentials: ProductAddDto): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, credentials);
  }

  deleteProduct(id: number): Observable<number> {
    return this.http.delete<number>(`${this.baseUrl}/products/${id}`)
      .pipe(
        map(() => id)
      )
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/products/${product.id}`, product);
  }
}
