import DatePicker from "@mui/lab/DatePicker";
import { TextField } from "@mui/material";
const DateTextField = () => {
  return (
    <div>
      <DatePicker
        value={selectedDate}
        label="Date Picker"
        renderInput={(params) => <TextField {...params} />}
        onChange={(date) => setSelectedDate(date)}
      />
    </div>
  );
};
export default DateTextField;
