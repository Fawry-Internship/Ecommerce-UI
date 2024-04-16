import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { Store } from 'src/app/shared/models/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-store',
  templateUrl: './view-store.component.html',
  styleUrls: ['./view-store.component.css']
})
export class ViewStoreComponent implements OnInit {
  stores: Store[] = [];
  headerList = ['ID', 'Name', 'Address'];
  searchTerm: string = '';
  storeForm!: FormGroup;
  editingStoreId: number = -1;

  constructor(private storeService: StoreService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getAllStores();
    this.storeForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  getAllStores(): void {
    this.storeService.getAllStore().subscribe(
      stores => {
        this.stores = stores;
        console.log(stores);
      },
      error => {
        console.error('Error fetching stores:', error);
      }
    );
  }

  editStore(storeId: number): void {
    const selectedStore = this.stores.find(store => store.id === storeId);
    if (selectedStore) {
      this.storeForm.patchValue(selectedStore);
      this.editingStoreId = storeId;
    }
  }

  onEditSubmit() {
    if (this.storeForm.valid) {
      this.storeService.updateStore(this.editingStoreId, this.storeForm.value).subscribe(
        updatedStore => {
          console.log('Store updated:', updatedStore);
          this.getAllStores();
          this.resetForm();
        },
        error => {
          console.error('Error updating store:', error);
        }
      );
    } else {
      console.error('Form is invalid.');
    }
  }

  deleteStore(storeId: number): void {
    // Logic to delete store
  }

  applyFilter(): void {

  }

  resetForm(): void {
    this.storeForm.reset();
    this.editingStoreId = -1;
  }

  get filteredStores() {
    if (!this.stores || !this.searchTerm.trim()) return this.stores;
    return this.stores.filter(store =>
      this.headerList.some(header =>
        (store as any)[header.toLowerCase()].toString().toLowerCase().includes(this.searchTerm.trim().toLowerCase())
      )
    );
  }
}
