import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stock } from '../../../../shared/models/stock';
import { StockService } from '../../../services/stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  stockForm!: FormGroup;

  constructor(private fb: FormBuilder, private stockService: StockService, private router: Router) { }

  ngOnInit(): void {
    this.createStockForm();
  }

  createStockForm() {
    this.stockForm = this.fb.group({
      quantity: ['', Validators.required],
      productCode: ['', Validators.required],
      storeId: ['', Validators.required] // Assuming you'll retrieve this from the logged-in user or some other source
    });
  }

  onSubmit() {
    if (this.stockForm.valid) {
      const newStock: Stock = this.stockForm.value;
      this.stockService.addStock(newStock.storeId, newStock).subscribe(
        (createdStock: Stock) => {
          this.router.navigate(['admin/stock']);
          console.log('New stock added:', createdStock);
        },
        (error) => {
          console.error('Error adding stock:', error);
        }
      );
    } else {
      // Form is invalid, display error or prevent submission
    }
  }
}
