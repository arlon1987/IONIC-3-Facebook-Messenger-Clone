import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

/*
 Generated class for the GetHelp page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-get-help',
    templateUrl: 'get-help.html'
})
export class GetHelpPage {

    constructor(public navCtrl:NavController, public navParams:NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad GetHelpPage');
    }

}
