import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  elementsList = [
    {
      id: 1,
      name: "Hydrogen",
      type: "Metal",
      value: "H"
    },
    {
      id: 2,
      name: "Helium",
      type: "Gas",
      value: "He"
    },
    {
      id: 3,
      name: "Lithium",
      type: "Metal",
      value: "Li"
    },
    {
      id: 4,
      name: "Beryllium",
      type: "Metal",
      value: "H"
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
