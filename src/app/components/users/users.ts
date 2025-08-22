import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { CommonModule } from '@angular/common';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // get imagePath() {
    // return 'assets/users/' + this.selectedUser().avatar;
  // }


  onSelectedUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    console.log('Selected user:', this.selectedUser());
  }


}
