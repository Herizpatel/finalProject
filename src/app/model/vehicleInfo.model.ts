export class VehicleInfoModel{ // This model is used to Vehicle Name by its id
  Make_ID: number;
  Make_Name: string;

  constructor(vehicleInfo) {
    this.Make_ID = vehicleInfo.Make_ID;
    this.Make_Name = vehicleInfo.Make_Name;
  }
}
