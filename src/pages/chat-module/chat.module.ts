import {NgModule} from "@angular/core";
import {IonicModule, DeepLinkConfig} from "ionic-angular";
import {SharedModule} from "../../shared";
import {ChatListPage} from "./chat-list.component";
import {ChatRoutes} from "./chat.routes";
import {ChatService} from "./chat.service";
import {SingleChatComponent, SinglePopover} from "./single-chat/single-chat.component";
import {GroupChatComponent} from "./group-chat/group-chat.component";
import {SelectMessengerContact} from "./select-messenger-contact/smc.component";
import {ChatboxModule} from "../../chatbox/";

export const ChatRoutesConfig:DeepLinkConfig = <DeepLinkConfig> {
    links: [
        {name: ChatRoutes.LIST, component: ChatListPage},
        {name: ChatRoutes.SINGLE, component: SingleChatComponent},
        {name: ChatRoutes.GROUP, component: GroupChatComponent},
    ]
}

let components = ChatRoutesConfig.links.map(l => l.component);
components.push(SinglePopover);
components.push(SelectMessengerContact);

@NgModule({
    imports: [
        SharedModule,
        ChatboxModule,
        IonicModule.forRoot(ChatListPage),
    ],
    declarations: components,
    entryComponents: components,
    providers: [ChatService],
    exports: components
})
export class ChatModule {
}