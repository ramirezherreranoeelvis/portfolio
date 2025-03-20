import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
      selector: 'card-proyect',
      imports: [CommonModule],
      templateUrl: './card-proyect.component.html',
      styleUrl: './card-proyect.component.scss',
})
export class CardProyectComponent {
      className = input<string>('');
      imgUrl = input.required<string>();
      githubUrl = input<string>('https://github.com/ramirezherreranoeelvis');
      proyectUrl = input<string>('https://github.com/ramirezherreranoeelvis');
}
