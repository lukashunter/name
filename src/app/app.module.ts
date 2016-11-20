import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ComponentModule} from "./shared/components/components.module";
import {InMemoryDataService} from "./memory-web-api/InMemoryDataService";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    NgbModule.forRoot(),
    ComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
