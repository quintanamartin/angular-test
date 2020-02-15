import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routes";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./modules/core/header/header.component";
import { FooterComponent } from "./modules/core/footer/footer.component";
import { SidebarComponent } from "./modules/core/sidebar/sidebar.component";
import { ContainerComponent } from "./modules/main/container/container.component";
import { WelcomeComponent } from "./modules/main/container/components/welcome/welcome.component";
import { TableComponent } from "./modules/main/container/components/table/table.component";
import { ApiSearchComponent } from "./modules/main/container/components/api-search/api-search.component";
import { WelcomeCardComponent } from "./modules/main/container/components/welcome/welcome-card/welcome-card.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContainerComponent,
    WelcomeComponent,
    TableComponent,
    ApiSearchComponent,
    WelcomeCardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
