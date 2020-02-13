import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "welcome-card",
  templateUrl: "./welcome-card.component.html",
  styleUrls: ["./welcome-card.component.css"]
})
export class WelcomeCardComponent implements OnInit {
  @Input() name: string;
  constructor() {}

  ngOnInit(): void {}
}
