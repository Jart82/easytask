import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Users } from "./components/users/users";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Users],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('easyTask');
}
