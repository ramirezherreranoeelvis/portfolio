import { Component } from "@angular/core";
import { HomeTemplateComponent } from "../components/templates/home-template/home-template.component";

@Component({
        selector: 'app-root',
        imports: [
                HomeTemplateComponent
        ],
        template: '<home-template/>'
})
export class HomeComponent { }