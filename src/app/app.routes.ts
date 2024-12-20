import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contactus', component: ContactusComponent }
];
