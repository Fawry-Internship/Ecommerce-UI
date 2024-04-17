import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { Store } from 'src/app/shared/models/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
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
  

  constructor(private storeService: StoreService, private fb: FormBuilder,private router: Router) {}

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
    this.router.navigate(['/admin/edit-store', storeId]);
  }

  
 
  deleteStore(storeId: number): void {
    this.storeService.deleteStoreById(storeId).subscribe(() => {
      console.log(`Store with ID ${storeId} deleted successfully.`);
      this.stores = this.stores.filter(store => store.id !== storeId);
      this.getAllStores();
    });
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
