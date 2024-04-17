import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from 'src/app/shared/models/store';
import { StoreService } from 'src/app/admin/services/store.service';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css']
})
export class EditStoreComponent implements OnInit {
  storeForm!: FormGroup;
  storeId!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private storeService: StoreService,
    private router:Router
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.storeId = +idParam;
      this.storeService.getById(this.storeId).subscribe(
        (store: Store) => {
          console.log(store);
          this.initStoreForm(store);
        },
        (error: any) => {
          console.error('Error fetching store:', error);
        }
      );
    } else {
      console.error('ID parameter is null.');
    }
  }

  initStoreForm(store: Store): void {
    this.storeForm = this.fb.group({
      name: [store.name !== undefined ? store.name : null, Validators.required],
      address: [store.address !== undefined ? store.address : null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.storeForm.valid) {
      const updatedStore = this.storeForm.value;
      this.storeService.updateStore(this.storeId, updatedStore).subscribe(
        (response: Store) => {
          console.log('Store updated successfully:', response);
          this.router.navigate(['/admin/store']);
        },
        (error: any) => {
          console.error('Error updating store:', error);
        }
      );
     
    } else {
      console.error('Form is invalid.');
    }
  }
}
