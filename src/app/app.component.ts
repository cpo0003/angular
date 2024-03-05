import { Component } from '@angular/core';
import { RouterOutlet , RouterLink} from '@angular/router';
import { UserComponent } from "./user/user.component";
import { GamesComponent } from "./games/games.component";
import { CurriculumComponent } from './curriculum/curriculum.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserComponent, GamesComponent,RouterLink,CurriculumComponent]
})
export class AppComponent {
 
}
