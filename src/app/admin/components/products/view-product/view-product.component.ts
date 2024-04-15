import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from "../../../../shared/models/product";
import { ProductService } from "../../../services/product.service";
import { Subscription, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit, OnDestroy {

  headerList = ["id", "code", "name", "description", "price", "categoryName", "brand", "imageUrl", "createdAt", "updatedAt"]
  products!: Product[];
  filteredProducts!: Product[];
  private refreshSubscription!: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.refreshSubscription = interval(10000)
      .pipe(
        switchMap(() => this.productService.getAllProducts())
      )
      .subscribe(data => {
        this.products = data;
        this.filteredProducts = this.products; // Update filtered products
      });
  }


  ngOnDestroy(): void {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  getProducts(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = this.products; // Initialize filtered products
    });
  }

  editProduct(event: any): void {
    console.log(event);
  }

  deleteProduct(event: any): void {
    const id = event.id;
    this.productService.deleteProduct(id).subscribe(() => {
      console.log(`Product with ID ${id} deleted successfully.`);
      this.products = this.products.filter(p => p.id !== id);
      this.filteredProducts = this.filteredProducts.filter(p => p.id !== id); // Update filtered products after deletion
    });
  }

  searchProducts(event: any): void {
    const query = event.target.value;
    console.log('Search query:', query);
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }

}
