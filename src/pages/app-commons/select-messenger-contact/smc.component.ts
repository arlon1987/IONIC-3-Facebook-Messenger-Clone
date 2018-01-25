import { Component } from '@angular/core';
import { UserService } from "../../../shared";

@Component({
    selector: 'smc',
    templateUrl: 'smc.component.html'
})

export class SelectMessengerContact {

    contacts = [];

    constructor(private userService:UserService) {
        userService.getMessengerContacts().forEach(c => this.contacts.push(c))
     }
}