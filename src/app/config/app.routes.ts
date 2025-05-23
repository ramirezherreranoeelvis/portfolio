import { Routes } from '@angular/router';
import { AboutMeComponent } from '../pages/about-me.component';
import { ProyectsComponent } from '../pages/proyects.component';
import { SkillsComponent } from '../pages/skills.component';
import { ResourcesComponent } from '../pages/resources.component';

export const routes: Routes = [
      {
            path: '',
            component: AboutMeComponent,
            title: 'Sobre mi',
      },
      {
            path: 'proyects',
            component: ProyectsComponent,
            title: 'Proyectos',
      },
      {
            path: 'skills',
            component: SkillsComponent,
            title: 'habilidades',
      },
      {
            path: 'resources',
            component: ResourcesComponent,
            title: 'Recursos',
      },
];
