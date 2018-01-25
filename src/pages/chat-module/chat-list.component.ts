import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Conversation} from "./conversation.model";
import {ChatService} from "./chat.service";
import {ChatRoutes} from "./chat.routes";

import {SelectMessengerContact} from "./select-messenger-contact/smc.component";

@Component({
    selector: 'chat-list',
    templateUrl: 'chat-list.component.html'
})
export class ChatListPage {

    conversations:Array<Conversation> = [];

    constructor(private nav:NavController, private navParams:NavParams, private chatService:ChatService) {
        this.chatService.getConversations().forEach(m => {
            this.conversations.push(m);
        });
    }

    goto(url: String) {
        this.navParams.get("rootNavCtrl").push(url)
    }
    gotoPage(page: any) {
        this.navParams.get("rootNavCtrl").push(page);
    }

    openChat(receiverId:string) {
        this.goto(ChatRoutes.SINGLE)
    }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
        console.log('Async operation has ended');
        refresher.complete();
        }, 2000);
    }

    newMessage() {
        console.log("opening to select contact");
        this.gotoPage(SelectMessengerContact);
    }

}
