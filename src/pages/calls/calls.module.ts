import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { SharedModule } from "../../shared";
import { CallsComponent } from './calls.component';
import { PhoneCallComponent } from "./phone-call.component";
import { SelectCallee } from "./select-callee/select-callee.component";

let components = [CallsComponent, PhoneCallComponent, SelectCallee];

@NgModule({
    imports: [
        SharedModule,
        IonicModule.forRoot(CallsComponent)
        ],
    exports: components,
    declarations: components,
    entryComponents: components,
    providers: [],
})
export class CallsModule { }