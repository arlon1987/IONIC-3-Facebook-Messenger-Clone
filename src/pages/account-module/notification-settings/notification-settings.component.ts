import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

@Component({
    selector: 'page-notification-setting',
    templateUrl: 'notification-settings.component.html'
})
export class NotificationSettingPage {

    constructor(public navCtrl:NavController, public navParams:NavParams) {
    }
}
