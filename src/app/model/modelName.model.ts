export class ModelInfo{ // This model is used to get model name on the bases of the make name
  Make_ID: number;
  Model_ID: number;
  Make_Name: string;
  Model_Name: string;

  constructor(modelInfo) {
    this.Make_ID = modelInfo.Make_ID;
    this.Make_Name = modelInfo.Make_Name;
    this.Model_ID = modelInfo.Model_ID;
    this.Model_Name = modelInfo.Model_Name;

  }
}
