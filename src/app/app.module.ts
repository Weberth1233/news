import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { CardComponent } from "../card/card.component";
import { ContentComponent } from "../content/content.component";
import { SideBarComponent } from "../sidebar/sidebar.component";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CardComponent,
    ContentComponent,
    SideBarComponent
  ],
  imports: [BrowserModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
