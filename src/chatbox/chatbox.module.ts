import {NgModule} from '@angular/core';
import {IonicModule} from "ionic-angular";
import {SharedModule} from "../shared";

import {ChatboxComponent} from "./chatbox.component";

@NgModule({
    imports: [
        SharedModule, 
        IonicModule.forRoot(ChatboxComponent)
    ],
    exports: [ChatboxComponent],
    declarations: [ChatboxComponent],
    entryComponents: [ChatboxComponent],
    providers: [],
})
export class ChatboxModule { }
