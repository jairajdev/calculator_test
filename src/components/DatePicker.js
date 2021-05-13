import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { FormControl, FormHelperText } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import * as moment from "moment";
import { useDispatch } from "react-redux";
import { addSelectedDate } from "../redux/action";
import { calculateDate } from "../utils/helper";

const DatePicker = ({
  classes: { formControl, container },
  formik: {
    values: { date: selectedDate },
    touched: { date: touchedElement },
    errors,
    errors: { date: errorsElement },
    setFieldValue,
  },
}) => {
  const dispatch = useDispatch();

  return (
    <FormControl
      className={formControl}
      error={
        (touchedElement && errorsElement) || (errors && errorsElement)
          ? true
          : false
      }
    >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          shouldDisableDate={(date) => {
            let d = calculateDate("hours", moment(), date);
            return d <= 0 || d >= 24 * 8;
          }}
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          label="Select Date"
          id="date-picker"
          value={selectedDate}
          onChange={(value) => {
            setFieldValue("date", value);
            dispatch(addSelectedDate(value));
          }}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          minDate={moment()}
        />
      </MuiPickersUtilsProvider>
      <FormHelperText>
        {errors && errorsElement ? errorsElement : null}
      </FormHelperText>
    </FormControl>
  );
};

export default DatePicker;
