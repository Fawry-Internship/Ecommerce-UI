import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from "../../../../shared/models/product";
import { ProductService } from "../../../services/product.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product!: Product;
  productForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const productIdParam = this.route.snapshot.paramMap.get('id');
    const productId = productIdParam ? +productIdParam : 0; // Convert to number or default to 0 if null
    this.productService.getProductById(productId).subscribe(
      (product: Product) => {
        this.product = product;
        this.updateProductForm();
        console.log(product)
      },
      (error: any) => {
        console.error('Error fetching product:', error);
      }
    );
  }

  updateProductForm() {
    this.productForm = this.fb.group({
      code: [{ value: this.product ? this.product.code : '', disabled: true }, Validators.required], // Disable code field
      name: [this.product ? this.product.name : '', Validators.required],
      description: [this.product ? this.product.description : '', Validators.required],
      price: [this.product ? this.product.price : '', Validators.required],
      categoryName: [this.product ? this.product.categoryName : '', Validators.required],
      brand: [this.product ? this.product.brand : '', Validators.required],
      imageUrl: [this.product ? this.product.imageUrl : '', Validators.required],
      active: [this.product ? this.product.active : true]
    });
  }

  onSubmit() {
    const updatedProduct = this.productForm.value;
    this.productService.updateProduct(updatedProduct).subscribe(
      (response: string) => {
        this.router.navigate(['/admin/products']);
        console.log('Product updated successfully:', response);
      },
      (error: any) => {
        console.error('Error updating product:', error);
      }
    );
  }
}
