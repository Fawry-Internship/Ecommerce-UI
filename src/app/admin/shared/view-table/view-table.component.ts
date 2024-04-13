import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})
export class ViewTableComponent {

  @Input() headList: string[] = [];
  @Input() rowsList: any[] = [];
  @Input() editable : boolean = false;
  @Input() deleteable : boolean = false;
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  editRow(row: any){
    this.onEdit.emit(row);
  }

  deleteRow(row:any){
    this.onDelete.emit(row);
  }

}
