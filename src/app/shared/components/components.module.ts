import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from "@angular/core/src/metadata/ng_module";
import {NameComponent} from "./name/name.component";
import {FormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import {JsonpModule} from "@angular/http";

@NgModule({
  declarations: [NameComponent],
  imports: [NgbModule, FormsModule, BrowserModule, JsonpModule],
  exports: [NameComponent]
})
export class ComponentModule {
}
