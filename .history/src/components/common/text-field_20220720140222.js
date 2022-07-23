import DatePicker from "@mui/lab/DatePicker";
import { TextField } from "@mui/material";
const DateTextField = ({ selectedDate }) => {
  return (
    <div>
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue="2017-05-24"
        className="date-text-field"
      />
    </div>
  );
};
export default DateTextField;
