import DatePicker from "@mui/lab/DatePicker";
import { TextField } from "@mui/material";
const DateTextField = ({ selectedDate }) => {
  return (
    <div>
      <DatePicker value={selectedDate} renderInput={
        (params) => <TextField {...params} />
      } />
    </div>
  );
};
export default DateTextField;
