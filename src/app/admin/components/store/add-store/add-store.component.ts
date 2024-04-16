import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/admin/services/store.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
  storeForm !: FormGroup;

  formValue:any;

  constructor(private fb: FormBuilder, private storeService:StoreService){}
  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.storeForm = this.fb.group({
      name: ['', Validators.required],   
      address: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.storeForm.valid) {
      this.storeService.createStore(this.storeForm.value).subscribe(
        createdStore => {
          console.log('New store created:', createdStore);
        },
        error => {
          console.error('Error creating store:', error);
        }
      );
    } else {
      console.error('Form is invalid.');
    }
  }
}