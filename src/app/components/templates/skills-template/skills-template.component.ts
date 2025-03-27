import { Component } from '@angular/core';

@Component({
      selector: 'skills-template',
      imports: [],
      templateUrl: './skills-template.component.html',
      styleUrl: './skills-template.component.scss',
})
export class SkillsTemplateComponent {
      routesImages: IRouteImages[] = [
            {
                  src: 'images/skills/angular.ico',
                  alt: 'angular',
            },
            {
                  src: 'images/skills/spring_boot.webp',
                  alt: 'spring_boot',
            },
            {
                  src: 'images/skills/react.webp',
                  alt: 'react',
            },
            {
                  src: 'images/skills/node.webp',
                  alt: 'node',
            },
            {
                  src: 'images/skills/MySQL.webp',
                  alt: 'mysql',
            },
            {
                  src: 'images/skills/css.webp',
                  alt: 'css',
            },
            {
                  src: 'images/skills/html.webp',
                  alt: 'html',
            },
            {
                  src: 'images/skills/java.webp',
                  alt: 'java',
            },
            {
                  src: 'images/skills/mongodb.webp',
                  alt: 'mongodb',
            },
            {
                  src: 'images/skills/nest.webp',
                  alt: 'nest',
            },
            {
                  src: 'images/skills/js.webp',
                  alt: 'javascript',
            },
            {
                  src: 'images/skills/sass.webp',
                  alt: 'sass',
            },
            {
                  src: 'images/skills/ts.webp',
                  alt: 'typescript',
            },
            {
                  src: 'images/skills/SQLServer.webp',
                  alt: 'SQLServer',
            },
      ];
}
interface IRouteImages {
      src: string;
      alt: string;
}
