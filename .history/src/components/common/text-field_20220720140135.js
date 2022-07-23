import DatePicker from '@mui/lab/DatePicker';
import { }
const DateTextField = () => {
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
}
export default DateTextField;