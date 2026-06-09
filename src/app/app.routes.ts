import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentsPage } from './features/students/pages/students-page/students-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page/student-detail-page';
import { LayoutsPage } from './features/layouts/layouts-page';
import { SignupPage } from './features/signup-page/signup-page';
import { ProfilePage } from './features/profile-page/profile-page';
import { ProjectConfigPage } from './features/project-config-page/project-config-page';
import { UiComponentsPage } from './features/ui-components-page/ui-components-page';
import { SimpsonsPage } from './features/simpsons/pages/simpsons-page/simpsons-page';
import { SimpsonDetailPage } from './features/simpsons/pages/simpson-detail-page/simpson-detail-page';
import { AuthPage } from './features/auth/pages/auth-page/auth-page';
import { guestGuard } from './core/guards/guest.guard';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'students', component: StudentsPage, canActivate: [authGuard]},
    {path: 'students/:id', component: StudentDetailPage, canActivate: [authGuard]},
    {path: 'layouts', component: LayoutsPage, canActivate: [authGuard]},
    {path: 'signup', component: SignupPage, canActivate: [authGuard]},
    {path: 'profile', component: ProfilePage, canActivate: [authGuard]},
    {path: 'project-config', component: ProjectConfigPage, canActivate: [authGuard]},
    {path: 'ui-components', component: UiComponentsPage, canActivate: [authGuard]},


    {path: 'simpsons', component: SimpsonsPage, canActivate: [adminGuard]},
    {path: 'simpsons/:id', component: SimpsonDetailPage, canActivate: [adminGuard]},

    {path: 'auth', component: AuthPage, canActivate: [guestGuard]},

    //redirect
    {path: '**', redirectTo: ''}
];