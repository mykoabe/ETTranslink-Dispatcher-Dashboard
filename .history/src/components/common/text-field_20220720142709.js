import DatePicker from "@mui/lab/DatePicker";
import { TextField } from "@mui/material";
const DateTextField = ({ selectedDate, handleDateChange }) => {
  return (
    <div>
      <DatePicker
        value={selectedDate}
        label="Date Picke"
        renderInput={(params) => <TextField {...params} fullWidth />}
        onChange={handleDateChange}
      />
    </div>
  );
};
export default DateTextField;
