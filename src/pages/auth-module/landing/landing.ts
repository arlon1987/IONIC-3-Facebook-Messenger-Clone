import {LoginPage} from "../login/login";
import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

@Component({
    selector: 'page-landing',
    templateUrl: 'landing.html'
})
export class LandingPage {

    constructor(public navCtrl:NavController, public navParams:NavParams) {
    }

    ionViewDidLoad() {
    }

    gotoHome() {
    }

    login() {
        this.navCtrl.setRoot(LoginPage);
    }

}
