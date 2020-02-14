import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class ApiSearchService {
  constructor(private http: HttpClient) {
    console.log("Servicio listo");
  }

  getData(data: string) {
    const url = `https://swapi.co/api/people/?search=${data}`;

    return this.http.get(url);
  }

  getCharacter(name: string) {
    return this.getData(name).pipe(map(data => data["results"][0]));
  }
}
