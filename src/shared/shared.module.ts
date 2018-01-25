import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {ListErrorsComponent} from "./list-errors.component";
import {ShowAuthedDirective} from "./show-authed.directive";
import {TimeSince} from "./timesince.pipe";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule
    ],
    declarations: [
        ListErrorsComponent,
        ShowAuthedDirective,
        TimeSince,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ListErrorsComponent,
        RouterModule,
        ShowAuthedDirective,
        TimeSince,
    ]
})
export class SharedModule {
}
