import {Component} from "@angular/core";
import { PopoverController, ViewController } from "ionic-angular";

@Component({
  template: `
    <ion-list no-lines>
      <button ion-item (click)="close()">Archive</button>
      <button ion-item (click)="close()">Delete</button>
      <button ion-item (click)="close()">Block</button>
      <button ion-item (click)="close()">Report problem</button>
    </ion-list>
  `
})
export class SinglePopover {
  constructor(private viewCtrl: ViewController) {}
  close() {
    this.viewCtrl.dismiss();
  }
}

@Component({
    selector: 'single-chat',
    templateUrl: 'single-chat.component.html'
})
export class SingleChatComponent {
    messages:Array<any>

    constructor(private popoverCtrl: PopoverController) {
        this.messages = ["Hello", "world", "again"];
    }

    presentPopover(event) {
        let popover = this.popoverCtrl.create(SinglePopover);
        popover.present({
            ev: event
        });
    }
}

