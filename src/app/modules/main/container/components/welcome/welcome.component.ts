import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  name: string;
  visible = false;
  buttonValue: string;

  constructor() {}

  ngOnInit(): void {
    this.buttonValue = "Show message";
  }

  toggleChild() {
    this.visible = !this.visible;
    if (this.visible) {
      this.buttonValue = "Retry";
    } else {
      this.buttonValue = "Show Message";
      this.name = "";
    }
  }
}
