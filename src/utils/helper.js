import * as moment from "moment";

export const calculateDate = (unit, startDate, endDate) => {
  let now = moment(startDate);
  let end = moment(endDate);
  let hourDiff = end.diff(now, unit);
  if (unit === "days") return hourDiff + 1;
  return hourDiff;
};
