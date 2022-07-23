import DatePicker from "@mui/lab/DatePicker";
import { TextField } from "@mui/material";
const DateTextField = ({ selectedDate }) => {
  return (
    <div>
      <DatePicker
        value={selectedDate}
        label="Date Picker"
        renderInput={(params) => <TextField {...params} />
        on
    }

      />
    </div>
  );
};
export default DateTextField;
