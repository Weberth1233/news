import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { AppComponent } from "./app.component";
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { CardComponent } from "../card/card.component";
import { ContentComponent } from "../content/content.component";
import { SideBarComponent } from "../sidebar/sidebar.component";
import { RegisterComponent } from "../register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CardComponent,
    ContentComponent,
    SideBarComponent,
    RegisterComponent
  ],
  imports: [BrowserModule, NgxPaginationModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
