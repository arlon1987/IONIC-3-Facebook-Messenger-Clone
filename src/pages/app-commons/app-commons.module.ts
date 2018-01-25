import {NgModule} from "@angular/core";
import {IonicModule, DeepLinkConfig} from "ionic-angular";
import {SharedModule} from "../../shared";
import {AppCommonsRoutes} from "./app-commons.routes";
import {TutorialPage} from "./tutorial/tutorial.component";
import {AllPagesComponent} from "./all-pages/all-pages.component";
import {ComingSoonComponent} from "./coming-soon/coming-soon.component";
//import {SelectMessengerContact} from "./select-messenger-contact/smc.component";
export const AppCommonsRoutesConfig:DeepLinkConfig = <DeepLinkConfig> {
    links: [
        {name: AppCommonsRoutes.TUTORIAL, component: TutorialPage},
        {name: AppCommonsRoutes.ALL_PAGES, component: AllPagesComponent},
        {name: AppCommonsRoutes.COMING_SOON, component: ComingSoonComponent},
    ]
}

let components = AppCommonsRoutesConfig.links.map(l => l.component);
//components.push(SelectMessengerContact);

@NgModule({
    imports: [
        SharedModule,
        IonicModule,
    ],
    declarations: components,
    providers: [],
    entryComponents: components,
    exports: components
})
export class AppCommonsModule {
}
