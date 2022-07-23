import DatePicker from "@mui/lab/DatePicker";
import { TextField } from "@mui/material";
const DateTextField = ({selectedDate, handleDateC}) => {
  return (
    <div>
      <DatePicker
        value={selectedDate}
        label="Date Picker"
        renderInput={(params) => <TextField {...params} />}
        onChange={handleDateChange}
      />
    </div>
  );
};
export default DateTextField;
