import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {ChatListPage, GroupChatComponent} from "../chat-module/";
import {CallsComponent} from "../calls/calls.component";
import {MessengerContactsComponent} from "../messenger-contacts/messenger-contacts.component";
import {AccountComponent} from "../account-module";

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})
export class Dashboard {
    searchText = 'Search for people and groups';

    chatList = ChatListPage;
    calls = CallsComponent;
    groupChat = GroupChatComponent;
    mContacts = MessengerContactsComponent;
    account = AccountComponent;

    constructor(public navCtrl:NavController) {

    }

    payment() {
    }
}