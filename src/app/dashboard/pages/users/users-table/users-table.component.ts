import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models';
import { Router } from '@angular/router';




@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styles: [
  ]
})
export class UsersTableComponent {

  @Input()

  dataSource: User[] = [];
  
  @Output()
  deleteUser = new EventEmitter<number>();
  @Output()
  onEditUser = new EventEmitter<User>();
  
  
  displayedColumns = 
  [
    'id', 
    'fullName', 
    'email', 
    'actions']

  constructor(private router: Router) {}

  viewDetail(userId: number): void {
    this.router.navigate(['dashboard', 'users', 'detail', userId]);
  }
} 

