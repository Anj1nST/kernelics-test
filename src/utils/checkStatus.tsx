import { StatusType } from "../types";

export function checkStatus(status: unknown): status is StatusType {
  if (typeof status === "string" && Object.keys(StatusType).includes(status)) {
    return true;
  }
  return false;
}
