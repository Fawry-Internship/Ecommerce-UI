import {Component, OnDestroy, OnInit} from '@angular/core';
import { Stock } from "../../../../shared/models/stock";
import { interval, Subscription } from "rxjs";
import { switchMap } from "rxjs/operators";
import {StockService} from "../../../services/stock.service";

@Component({
  selector: 'app-view-stock',
  templateUrl: './view-stock.component.html',
  styleUrls: ['./view-stock.component.css']
})
export class ViewStockComponent implements OnInit, OnDestroy{
  headerList: string[] = ["id", "quantity", "productCode", "storeId", "createdAt", "updatedAt"];  stocks!: Stock[];
  filteredStocks!: Stock[];
  private refreshSubscription!: Subscription;

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.getStocks();
    this.refreshSubscription = interval(10000)
      .pipe(
        switchMap(() => this.stockService.getAllStocks())
      )
      .subscribe(data => {
        this.stocks = data;
        this.filteredStocks = this.stocks;
      });
  }

  ngOnDestroy(): void {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  getStocks(): void {
    this.stockService.getAllStocks().subscribe(data => {
      this.stocks = data;
      this.filteredStocks = this.stocks;
    });
  }

  editStock(event: any): void {
    console.log(event);
  }

  deleteStock(event: any): void {
    console.log(event)
  }

  searchStocks(event: any): void {
    const query = event.target.value;
    console.log('Search query:', query);
    this.filteredStocks = this.stocks.filter(stock =>
      stock.id.toString().includes(query.toLowerCase())
    );
  }

}
