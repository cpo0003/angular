import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent,RouterOutlet,RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'Cristian Plaza';
  isLoggedIn = false;
  favGame = "";

  getFavGame(gameName: string) {
    this.favGame = gameName;
  }

  constructor(private router: Router) { }
  greet() {
    this.router.navigateByUrl('/curriculum');
  }
}