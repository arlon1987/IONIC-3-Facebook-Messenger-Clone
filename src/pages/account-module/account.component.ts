import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {AccountRoutes} from "./account.routes";

@Component({
    selector: 'account-page',
    templateUrl: './account.component.html'
})
export class AccountComponent {

    routes = AccountRoutes

    constructor(private nav:NavController, private navParams:NavParams) {
    }

    goto(url:string) {
        this.navParams.get("rootNavCtrl").push(url)
    }

}