import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../admin/services/product.service";
import {Product} from "../../../shared/models/product";
import {StoreService} from "../../services/store.service";


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.storeService.getAllStocksProducts().subscribe((data: any) => {
      this.products = data;
      console.log(data);
    });
  }
}
