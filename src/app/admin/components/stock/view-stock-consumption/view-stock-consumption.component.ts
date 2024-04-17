import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from 'src/app/admin/services/stock.service';
import { StockConsumption } from 'src/app/shared/models/stockConsumption';

@Component({
  selector: 'app-view-stock-consumption',
  templateUrl: './view-stock-consumption.component.html',
  styleUrls: ['./view-stock-consumption.component.css']
})
export class ViewStockConsumptionComponent {
  headerList = [
    "id",
    "storeId",
    "productCode",
    "quantityBeforeUpdate",
    "quantityAfterUpdate",
    "createdAt"
  ]

  consumptionList:StockConsumption[]=[];

  stockId!:number;

  constructor(private stockService:StockService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe( params =>{
      this.stockId = parseInt(params['stockId'])
      this.getStockConsumptionHistories();
    });
  }

  getStockConsumptionHistories(){
    this.stockService.getStockConsumptionHistories(this.stockId).subscribe( data => {
      this.consumptionList = data;
    })
  }

}
