import { Component } from '@angular/core';

@Component({
      selector: 'resources-template',
      imports: [],
      templateUrl: './resources-template.component.html',
      styleUrl: './resources-template.component.scss',
})
export class ResourcesTemplateComponent {
      protected resources: IResource[] = [
            {
                  href: 'https://angular.dev/',
                  alt: 'angular',
                  src: '/images/skills/angular.ico',
                  text: 'Documentación Angular',
            },
            {
                  href: 'https://tailwindcss.com/docs/installation/using-vite',
                  alt: 'tailwind',
                  src: '/images/skills/tailwind.webp',
                  text: 'Documentación Tailwind',
            },
            {
                  href: 'https://nancynsalazar.medium.com/gu%C3%ADa-r%C3%A1pida-para-construir-tu-portafolio-como-programador-a-9f02daeabb12',
                  alt: '',
                  src: '',
                  text: 'Guía rápida para construir tu portafolio como programador(a)',
            },
      ];
}
interface IResource {
      href: string;
      alt: string;
      src: string;
      text: string;
}
