import {NgModule} from "@angular/core";
import {IonicModule, DeepLinkConfig} from "ionic-angular";
import {SharedModule} from "../../shared";
import {AccountRoutes} from "./account.routes";
import {AccountComponent} from "./account.component";
import {PhoneNumbersComponent} from "./phone-numbers/phone-numbers.component";
import {NotificationSettingPage} from "./notification-settings/notification-settings.component";

export const AccountRoutesConfig:DeepLinkConfig = <DeepLinkConfig> {
    links: [
        {name: AccountRoutes.ACCOUNT, component: AccountComponent},
        {name: AccountRoutes.PHONE_NUMBERS, component: PhoneNumbersComponent},
        {name: AccountRoutes.NOTIFICATION_SETTINGS, component: NotificationSettingPage},
    ]
}
let components = AccountRoutesConfig.links.map(l => l.component);

@NgModule({
    imports: [
        SharedModule,
        IonicModule.forRoot(AccountComponent),
    ],
    declarations: components,
    providers: [],
    entryComponents: components,
    exports: components
})
export class AccountModule {
}
