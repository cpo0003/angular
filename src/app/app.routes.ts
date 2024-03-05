import { Routes } from '@angular/router';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {path:'login',component: UserComponent},
    {path:'curriculum',component: CurriculumComponent}
];
