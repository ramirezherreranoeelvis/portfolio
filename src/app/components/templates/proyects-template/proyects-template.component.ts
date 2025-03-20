import { Component } from '@angular/core';
import { CardProyectComponent } from '../../molecules/card-proyect/card-proyect.component';

@Component({
      selector: 'proyects-template',
      imports: [CardProyectComponent],
      templateUrl: './proyects-template.component.html',
      styleUrl: './proyects-template.component.scss',
})
export class ProyectsTemplateComponent {}
