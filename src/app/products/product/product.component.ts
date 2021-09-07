import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from "../models/product.model";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product?: Product;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() update: EventEmitter<Product> = new EventEmitter<Product>();
  form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    if (this.product) {
      this.form = this.fb.group({
        id: [this.product.id],
        name: [this.product.name, Validators.required],
        price: [this.product.price, Validators.required],
        description: [this.product.description, Validators.required],
        quantity: [this.product.quantity, Validators.required],
      });
    }

  }

  onDelete(id: number): void {
    this.delete.emit(id);
  }

  onSubmit(): void {
    this.update.emit(this.form.value);
  }

}
