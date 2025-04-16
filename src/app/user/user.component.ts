import { Component, Input, output } from '@angular/core';


type User = { 
  id: string; 
  name: string; 
  avatar: string 
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!: User;

  // @Output() select = new EventEmitter();
  select = output<string>();
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

 
}
