import { type Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactPageComponent,
  },
];

export const ContactRoutes = RouterModule.forChild(routes);
