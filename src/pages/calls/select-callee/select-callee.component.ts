import { Component } from '@angular/core';
import { UserService } from "../../../shared";

@Component({
    selector: 'selectcallee',
    templateUrl: 'select-callee.component.html'
})

export class SelectCallee  {
    contacts = [];

    constructor(private userService:UserService) {
        userService.getMessengerContacts().forEach(c => this.contacts.push(c))
     }
     startPhoneCall() {}
     startVideoCall() {}
}