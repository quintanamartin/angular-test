import { Component, OnInit, Input } from "@angular/core";
import { ApiSearchService } from "src/app/services/api-search.service";

@Component({
  selector: "app-api-search",
  templateUrl: "./api-search.component.html",
  styleUrls: ["./api-search.component.css"]
})
export class ApiSearchComponent {
  name: string;
  character: any[] = [];
  loading: boolean;
  noData: boolean = false;
  constructor(private searchService: ApiSearchService) {}
  ngOnInit(): void {}

  search() {
    this.loading = true;
    const userName = this.name;
    this.searchService.getCharacter(userName).subscribe((data: any) => {
      this.character = data;
      this.loading = false;
      this.noData = false;
      if (!data) {
        this.noData = true;
      }
    });
  }
}
