import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from "../../../services/product.service";
import { Product } from "../../../../shared/models/product";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.createProductForm();
    this.loadAllProducts();
  }

  createProductForm() {
    this.productForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      categoryName: ['', Validators.required],
      brand: ['', Validators.required],
      imageUrl: ['', Validators.required],
      active: [true]
    });
  }

  loadAllProducts() {
    this.productService.getAllProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
        this.filteredProducts = [...this.products];
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }


  onSubmit() {
    if (this.productForm.valid) {
      const newProduct: Product = this.productForm.value;
      this.productService.addProduct(newProduct).subscribe(
        (createdProduct: Product) => {
          this.router.navigate(['admin/products']);
          console.log('New product created:', createdProduct);
          this.productForm.reset();
          window.location.reload()
        },
        (error) => {
          console.error('Error creating product:', error);
        }
      );
    } else {
      // Form is invalid, display error or prevent submission
    }
  }
}
