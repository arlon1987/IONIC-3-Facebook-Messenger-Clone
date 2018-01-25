import {NgModule, ErrorHandler} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {IonicApp, IonicModule, IonicErrorHandler, DeepLinkConfig} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {IonicStorageModule} from "@ionic/storage";
import {SuperTabsModule} from "ionic2-super-tabs";
import {ChatboxModule} from "../chatbox";
import {AuthModule, AuthRoutesConfig} from "../pages/auth-module/auth.module";
import {AccountModule, AccountRoutesConfig} from "../pages/account-module";
import {AppCommonsModule, AppCommonsRoutesConfig} from "../pages/app-commons";
import {ChatModule, ChatRoutesConfig} from "../pages/chat-module";
import {AppComponent} from "./app.component";
import {CallsModule} from "../pages/calls";
import {AppConfig} from "./app.config";
import {Dashboard} from "../pages/dashboard/dashboard.component";
import {MessengerContactsComponent} from "../pages/messenger-contacts/messenger-contacts.component";
import {ApiService, AuthGuard, JwtService, UserService, SharedModule} from "../shared";

// merge all the submodule routes into one
let links = AccountRoutesConfig.links
    .concat(AuthRoutesConfig.links)
    .concat(AppCommonsRoutesConfig.links)
    .concat(ChatRoutesConfig.links)
links.push({name: "dashboard", component: Dashboard})

export const AppRoutes:DeepLinkConfig = <DeepLinkConfig> {
    links: links
}

@NgModule({
    declarations: [
        AppComponent,
        Dashboard,
        MessengerContactsComponent,
    ],
    imports: [
        BrowserModule,
        AuthModule,
        SharedModule,
        AccountModule,
        AppCommonsModule,
        ChatModule,
        CallsModule,
        ChatboxModule,
        SuperTabsModule.forRoot(),
        IonicStorageModule.forRoot(),
        IonicModule.forRoot(AppComponent, AppConfig, AppRoutes)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        AppComponent,
        Dashboard,
        MessengerContactsComponent,
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ApiService,
        AuthGuard,
        JwtService,
        UserService,
        StatusBar,
        SplashScreen,
    ]
})
export class AppModule {
}
