import {NgModule} from "@angular/core";
import {IonicModule, DeepLinkConfig} from "ionic-angular";
import {AuthComponent} from "./auth.component";
import {LoginPage} from "./login/login";
import {LandingPage} from "./landing/landing";
import {NoAuthGuard} from "./no-auth-guard.service";
import {SharedModule} from "../../shared";
import {AuthRoutes} from "./auth.routes";

export const AuthRoutesConfig:DeepLinkConfig = <DeepLinkConfig> {
    links: [
        {name: AuthRoutes.LOGIN, component: LoginPage},
        {name: AuthRoutes.SIGNUP, component: AuthComponent},
    ]
}

@NgModule({
    imports: [
        SharedModule,
        IonicModule.forRoot(AuthComponent),
    ],
    declarations: [
        AuthComponent,
        LoginPage,
        LandingPage,
    ],
    providers: [
        NoAuthGuard
    ],
    entryComponents: [
        AuthComponent,
        LoginPage,
        LandingPage,
    ],
    exports: [
        AuthComponent,
        LoginPage,
        LandingPage,
    ]
})
export class AuthModule {
}
