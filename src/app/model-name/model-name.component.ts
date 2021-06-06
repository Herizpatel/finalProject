import { Component, OnInit } from '@angular/core';
import {ModelInfo} from "../model/modelName.model";
import {HttpClient} from "@angular/common/http";
import {VehicleInfoModel} from "../model/vehicleInfo.model";

@Component({
  selector: 'app-model-name',
  templateUrl: './model-name.component.html',
  styleUrls: ['./model-name.component.css']
})
export class ModelNameComponent implements OnInit {
  model: Array<ModelInfo> = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.model = [
      new ModelInfo({
        Make_ID: 474,
        Make_Name: 'HONDA',
        Model_ID: 1,
        Model_Name: 'Civic',
      })
    ]
  }


}
