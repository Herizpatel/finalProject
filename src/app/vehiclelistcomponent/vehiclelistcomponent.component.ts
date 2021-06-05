import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {VehicleInfoModel} from "../model/vehicleInfo.model";

@Component({
  selector: 'app-vehiclelistcomponent',
  templateUrl: './vehiclelistcomponent.component.html',
  styleUrls: ['./vehiclelistcomponent.component.css']
})
export class VehiclelistcomponentComponent implements OnInit {
  vehicle!: Array<VehicleInfoModel>;
  li: any;
  lis = [];
  constructor(private http: HttpClient) {
  }

  // This will fetch data from an API
  ngOnInit(): void {
    this.vehicle = [
      new VehicleInfoModel({
        Make_ID: 440,
        Make_Name: 'ASTON MARTIN',
        image: {medium:'https://thumbs.dreamstime.com/b/startech-aston-martin-hp-vantage-customized-sports-car-th-geneva-international-motor-show-switzerland-march-white-196334566.jpg'}
      })
    ]
  }
  //   this.http.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
  //     .subscribe(result => {
  //       function hideloader() {
  //         console.log('No data');
  //       }
  //
  //       if(result){
  //         hideloader();
  //       }
  //       console.log(result);
  //       this.li = result;
  //       this.lis = this.li.Results;
  //     });
  // }
}
