export enum StatusType {
  Working = "Working",
  OnVacationser = "OnVacationser",
  LunchTime = "LunchTime",
  BusinessTrip = "BusinessTrip",
}

export interface IEmployee {
  id: number;
  name: string;
  status: StatusType;
  img: string;
}
