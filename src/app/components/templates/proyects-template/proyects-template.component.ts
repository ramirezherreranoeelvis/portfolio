import { Component } from '@angular/core';
import { CardProyectComponent } from '../../molecules/card-proyect/card-proyect.component';

@Component({
      selector: 'proyects-template',
      imports: [CardProyectComponent],
      templateUrl: './proyects-template.component.html',
      styleUrl: './proyects-template.component.scss',
})
export class ProyectsTemplateComponent {
      proyects = [
            {
                  portada: 'images/proyects/proyecto1.webp',
                  github: 'https://github.com/ramirezherreranoeelvis/Colegio',
            },
            {
                  portada: 'images/proyects/skill-connect.webp',
                  github: 'https://github.com/ramirezherreranoeelvis/VirtualSkills',
                  proyectUrl: 'https://virtual-skills.vercel.app/',
            },
            {
                  portada: 'images/proyects/ecomerce.webp',
                  github: 'https://github.com/ramirezherreranoeelvis/ecomerce-frontend',
                  proyectUrl: 'https://ecomerce-frontend-gato.vercel.app/home',
            },
            { portada: 'images/proyects/proyecto4.webp' },
            { portada: 'images/proyects/proyecto5.webp' },
            { portada: 'images/proyects/proyecto6.webp' },
      ];
}
