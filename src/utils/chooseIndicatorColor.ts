import { StatusType } from "../types";

export function chooseIndicatorColor(value: string) {
  switch (value) {
    case StatusType.Working: {
      return "#2ED47A";
    }
    case StatusType.BusinessTrip: {
      return "#A92ED4";
    }
    case StatusType.LunchTime: {
      return "#eac830";
    }
    case StatusType.OnVacationser: {
      return "#F7685B";
    }
    default:
      return "currentColor";
  }
}
