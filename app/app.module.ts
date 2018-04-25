import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component"

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptUISideDrawerModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
