import {Component} from "@angular/core";

@Component({
    selector: 'messenger-contacts',
    templateUrl: 'messenger-contacts.component.html'
})

export class MessengerContactsComponent {
    mfilter = "messenger";
    contacts = [{
        otherName: "Carlos Manikos",
        otherOnlineStatus: "online",
        otherAvatar: "assets/images/avatars/a0.jpg",
        otherReadStatus: "sent",
        lastMessage: "see you tomorrow!",
        lastMessageTime: "9:04 pm",
        myReadStatus: "read",
        amLastSender: true,
    },
        {
            otherName: "Chinemerem Jerry Chukwu",
            otherOnlineStatus: "offline",
            otherAvatar: "assets/images/avatars/a1.jpg",
            otherReadStatus: "delivered",
            lastMessage: "Chinemerem called you.",
            lastMessageTime: "Mon",
            myReadStatus: "read",
            amLastSender: false,
        },
        {
            otherName: "Shamaya Marshall",
            otherOnlineStatus: "online",
            otherAvatar: "assets/images/avatars/a2.jpg",
            otherReadStatus: "read",
            lastMessage: "Ok",
            lastMessageTime: "Mar 15",
            myReadStatus: "read",
            amLastSender: false,
        },
        {
            otherName: "Habeeb Olawin",
            otherOnlineStatus: "offline",
            otherAvatar: "assets/images/avatars/a3.jpg",
            otherReadStatus: "read",
            lastMessage: "Okay",
            lastMessageTime: "Mar 15",
            myReadStatus: "read",
            amLastSender: true,
        },
        {
            otherName: "Kelly Vincent",
            otherOnlineStatus: "offline",
            otherAvatar: "assets/images/avatars/a4.jpg",
            otherReadStatus: "read",
            lastMessage: "Yea I'm fine",
            lastMessageTime: "Mar 15",
            myReadStatus: "read",
            amLastSender: false
        },
        {
            otherName: "Annmarie Idichandy",
            otherOnlineStatus: "online",
            otherAvatar: "assets/images/avatars/a5.jpg",
            otherReadStatus: "read",
            lastMessage: "Yay!",
            lastMessageTime: "Mar 14",
            myReadStatus: "read",
            amLastSender: false
        },
        {
            otherName: "Pedro Amaral",
            otherOnlineStatus: "online",
            otherAvatar: "assets/images/avatars/a6.jpg",
            otherReadStatus: "read",
            lastMessage: "haha I'm typing...",
            lastMessageTime: "Mar 14",
            myReadStatus: "read",
            amLastSender: true
        },
        {
            otherName: "Nigelo Ceolo",
            otherOnlineStatus: "online",
            otherAvatar: "assets/images/avatars/a7.jpg",
            otherReadStatus: "read",
            lastMessage: "Thanks man, hope you enjoyed the day as well",
            lastMessageTime: "Mar 14",
            myReadStatus: "read",
            amLastSender: true
        },
        {
            otherName: "Rapheli Ralimba",
            otherOnlineStatus: "online",
            otherAvatar: "assets/images/avatars/a8.jpg",
            otherReadStatus: "read",
            lastMessage: "The video chat ended.",
            lastMessageTime: "Mar 14",
            myReadStatus: "read",
            amLastSender: false
        },
        {
            otherName: "Mikel Ogobu",
            otherOnlineStatus: "online",
            otherAvatar: "assets/images/avatars/a9.jpg",
            otherReadStatus: "read",
            lastMessage: "Cool",
            lastMessageTime: "Mar 14",
            myReadStatus: "read",
            amLastSender: false
        }];

    constructor() {
    }
}