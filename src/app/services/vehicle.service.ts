import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  api_URL = 'https://vpic.nhtsa.dot.gov/api/';

  constructor(private http: string) { }

  getVehicles(query: string): Observable<any>{
    const url = `${this.api_URL}/vehicles/getallmakes`;
    let params = new HttpParams();
    params = params.append('q', query);
    return this.http.get<Array<{Make_ID: number, Make_Name: string}>>(url, {params})
      .pipe(
        map(results => {
          let makes: any[];
          makes = [];
          results.forEach(result => {
            makes.push(new VehicleService(result.Make_Name));
          });
          return makes;
        })
      );
  }
}
