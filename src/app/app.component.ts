import {Component} from "@angular/core";
import {Platform} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {Storage} from "@ionic/storage";
import {Dashboard} from "../pages/dashboard/dashboard.component";
import {TutorialPage} from "../pages/app-commons";


@Component({
    templateUrl: 'app.html'
})
export class AppComponent {
    rootPage:any;

    constructor(private platform:Platform, private storage:Storage, private statusBar:StatusBar, private splashScreen:SplashScreen) {

        // set splashscreen color programmatically (find a way to hardcode this into the generated config)
        this.statusBar.overlaysWebView(true)
        this.statusBar.backgroundColorByHexString('#006acc');
        this.statusBar.styleLightContent();

        // Check if the user has already seen the tutorial
        this.storage.get('hasSeenTutorial')
            .then((hasSeenTutorial) => {
                if (hasSeenTutorial) {
                    this.rootPage = Dashboard;
                } else {
                    this.rootPage = TutorialPage;
                }
                this.platformReady()
            });
    }

    platformReady() {
        this.platform.ready().then(() => {
            this.splashScreen.hide();
        });
    }
}
