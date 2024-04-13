import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from "../../../services/users-service";
import {interval, Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit, OnDestroy{
  users!: any[];
  subscription!: Subscription;
  headerList = ["id", "email", "enable"];
  searchTerm: string = '';

  constructor(private usersService:UsersService, private router: Router){
  }

  ngOnInit(): void {
    this.getAllUsers();
    this.subscription = interval(10000).subscribe(() => {
      this.getAllUsers();
    });
  }


  activateUser(userId: number): void {
    this.usersService.activateUser(userId).subscribe(
      response => {
        if (response.status === 202) {
          console.log('User activation request accepted.');
          this.getAllUsers();
        } else {
          console.error('Unexpected response while activating user:', response);
        }
      },
      error => {
        console.error('Error activating user:', error);
      }
    );
  }

  deactivateUser(userId: number): void {
    this.usersService.deactivateUser(userId).subscribe(
      response => {
        if (response.status === 202) {
          console.log('User deactivation request accepted.');
          this.getAllUsers();
        } else {
          console.error('Unexpected response while deactivating user:', response);
        }
      },
      error => {
        console.error('Error deactivating user:', error);
      }
    );
  }

  get filteredUsers() {
    if (!this.users) return [];
    return this.users.filter(user =>
      this.headerList.some(header =>
        user[header].toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getAllUsers(): void {
    this.usersService.getAllUsers().subscribe(
      users => {
        this.users = users;
        console.log(users)
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }

  addNewAdmin() {
    this.router.navigate(['/register']);
  }
}
