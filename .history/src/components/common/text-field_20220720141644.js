import DatePicker from "@mui/lab/DatePicker";
import { useState } from "react";
const DateTextField = () => {
  return (
    <div>
      <DatePicker
        value={selectedDate}
        label="Date Picker"
        renderInput={(params) => <TextField {...params} />}
        onChange={shandleDat}
      />
    </div>
  );
};
export default DateTextField;
