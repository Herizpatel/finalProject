export class VehicleInfoModel{
  Make_ID: number;
  Make_Name: string;

  constructor(vehicleInfo) {
    this.Make_ID = vehicleInfo.Make_ID;
    this.Make_Name = vehicleInfo.Make_Name;
  }
}
