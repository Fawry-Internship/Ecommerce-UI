import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { Store } from 'src/app/shared/models/store';
import { interval, Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-store',
  templateUrl: './view-store.component.html',
  styleUrls: ['./view-store.component.css']
})
export class ViewStoreComponent implements OnInit {
  stores!: Store[];
  subscription!: Subscription;
  headerList = ['ID', 'Name', 'Address'];
  searchTerm: string = '';
  storeForm !: FormGroup;
  showEditForm: boolean = false;
  editingStoreId: number = -1;

  constructor(private storeService: StoreService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getAllStores();
    this.subscription = interval(30000).subscribe(() => {
      this.getAllStores();
    });
    this.storeForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
      this.showEditForm = true;
      this.editingStoreId = storeId;
    }
  }

  onEditSubmit() {
    if (this.storeForm.valid) {
      this.storeService.updateStore(this.editingStoreId, this.storeForm.value).subscribe(
        updatedStore => {
          console.log('Store updated:', updatedStore);
          this.getAllStores();
          this.showEditForm = false;
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

  resetForm(): void {
    this.storeForm.reset();
    this.showEditForm = false;
    this.editingStoreId = -1;
  }
}
