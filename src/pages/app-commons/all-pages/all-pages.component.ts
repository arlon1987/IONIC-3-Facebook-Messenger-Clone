import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {AppRoutes} from "../../../app/app.module";

@Component({
    selector: 'all-pages',
    templateUrl: 'all-pages.component.html'
})
export class AllPagesComponent {
    pages = [];

    constructor(private nav:NavController) {
        AppRoutes.links.forEach(l => {
            this.pages.push(l.name);
        });
    }

    goto(url:string) {
        this.nav.push(url);
    }
}