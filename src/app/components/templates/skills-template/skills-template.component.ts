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
                  src: 'images/skills/spring_boot.png',
                  alt: 'spring_boot',
            },
            {
                  src: 'images/skills/react.png',
                  alt: 'react',
            },
            {
                  src: 'images/skills/node.png',
                  alt: 'node',
            },
            {
                  src: 'images/skills/MySQL.png',
                  alt: 'mysql',
            },
            {
                  src: 'images/skills/css.png',
                  alt: 'css',
            },
            {
                  src: 'images/skills/html.png',
                  alt: 'html',
            },
            {
                  src: 'images/skills/java.png',
                  alt: 'java',
            },
            {
                  src: 'images/skills/mongodb.png',
                  alt: 'mongodb',
            },
            {
                  src: 'images/skills/nest.png',
                  alt: 'nest',
            },
            {
                  src: 'images/skills/js.png',
                  alt: 'javascript',
            },
            {
                  src: 'images/skills/sass.png',
                  alt: 'sass',
            },
            {
                  src: 'images/skills/ts.png',
                  alt: 'typescript',
            },
            {
                  src: 'images/skills/SQLServer.png',
                  alt: 'SQLServer',
            },
      ];
}
interface IRouteImages {
      src: string;
      alt: string;
}
