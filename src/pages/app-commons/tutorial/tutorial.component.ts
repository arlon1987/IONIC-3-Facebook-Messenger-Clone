import {Component, ViewChild} from "@angular/core";
import {MenuController, NavController, Slides} from "ionic-angular";
import {Storage} from "@ionic/storage";

@Component({
    selector: 'tutorial-page',
    templateUrl: 'tutorial.component.html',
    styleUrls: ['/tutorial/tutorial.component.scss']
})

export class TutorialPage {
    showSkip = true;

    @ViewChild('slides') slides:Slides;

    constructor(public navCtrl:NavController,
                public menu:MenuController,
                public storage:Storage) {
    }

    startApp() {
        this.navCtrl.push("dashboard").then(() => {
            this.storage.set('hasSeenTutorial', 'true');
        })
    }

    onSlideChangeStart(slider:Slides) {
        this.showSkip = !slider.isEnd();
    }

    ionViewWillEnter() {
        this.slides.update();
    }

    ionViewDidEnter() {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    }

    ionViewDidLeave() {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    }

}
