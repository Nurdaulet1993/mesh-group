import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Product } from "../models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() update: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  onDelete(id: number): void {
    this.delete.emit(id);
  }

  onUpdate(product: Product): void {
    this.update.emit(product);
  }

}
