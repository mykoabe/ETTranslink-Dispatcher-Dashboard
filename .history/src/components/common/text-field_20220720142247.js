import DatePicker from "@mui/lab/DatePicker";
import { TextField } from "@mui/material";
const DateTextField = ({ selectedDate, handleDateChange }) => {
  return (
    <div>
      <DatePicker
        value={selectedDate}
        label="Date Picker"
        renderInput={(params) => <TextField {...params} full />}
        onChange={handleDateChange}
      />
    </div>
  );
};
export default DateTextField;
