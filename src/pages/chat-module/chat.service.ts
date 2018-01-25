import {Injectable} from "@angular/core";
import {Message} from "./message.model";
import {Conversation} from "./conversation.model";

@Injectable()
export class ChatService {

    constructor() {
    }

    getMessages():Array<Message> {
        let m = <Message[]>[
            {
                time: this.timeSince(Date.now()),
                content: "hi johnny, how are you?",
                receiverName: "John Doe",
                receiverAvatar: "assets/images/avatar.jpg",
            },
            {
                time: this.timeSince(Date.now() - 100000),
                content: "I'm good, and you?",
                receiverName: "Sam Watson",
                receiverAvatar: "assets/images/avatar.jpg",
            }
        ];
        return m;
    }


    getConversations():Array<Conversation> {
        let convos = <Conversation[]>[
            {
                otherName: "Carlos Manikos",
                otherOnlineStatus: "online",
                otherAvatar: "assets/images/avatars/a0.jpg",
                otherReadStatus: "sent",
                lastMessage: "see you tomorrow!",
                lastMessageTime: "9:04 PM",
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
            },
        ];
        return convos;
    }

    timeSince(date) {

        let x = new Date();
        var seconds = Math.floor((x as any - date) / 1000);

        var interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + " years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hrs";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " mins";
        }
        return Math.floor(seconds) + " secs";
    }
}