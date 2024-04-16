import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stock } from '../../../../shared/models/stock';
import { StockService } from '../../../services/stock.service';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit {
  stockForm!: FormGroup;
  stockId!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private stockService: StockService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.stockId = +idParam;
      this.stockService.getStockById(this.stockId).subscribe(
        (stock: Stock) => {
          console.log(stock)
          this.initStockForm(stock);
        },
        (error: any) => {
          console.error('Error fetching stock:', error);
        }
      );
    } else {
      console.error('ID parameter is null.');
    }
  }

  initStockForm(stock: Stock): void {
    this.stockForm = this.fb.group({
      quantity: [stock.quantity, Validators.required],
      productCode: [stock.productCode, Validators.required],
      storeId: [stock.storeId, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.stockForm.valid) {
      const updatedStock = this.stockForm.value;
      this.stockService.updateStock(this.stockId, updatedStock).subscribe(
        (response: Stock) => {
          console.log('Stock updated successfully:', response);
        },
        (error: any) => {
          console.error('Error updating stock:', error);
        }
      );
    } else {
      console.error('Form is invalid.');
    }
  }
}
