import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./modules/main/container/components/welcome/welcome.component";
import { TableComponent } from "./modules/main/container/components/table/table.component";
import { ApiSearchComponent } from "./modules/main/container/components/api-search/api-search.component";

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: "table", component: TableComponent },
  { path: "apiSearch", component: ApiSearchComponent },
  { path: "**", component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
