import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})
export class ViewTableComponent {

  @Input() headList: any[] = [];
  @Input() rowsList: any[] = [];
  @Input() active : boolean = false;
  @Input() editable : boolean = false;
  @Input() deleteable : boolean = false;
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onActivate = new EventEmitter<any>();


  isActive(row:any){
    this.onEdit.emit(row);
  }

  editRow(row: any){
    this.onEdit.emit(row);
  }

  deleteRow(row:any){
    this.onDelete.emit(row);
  }

}
