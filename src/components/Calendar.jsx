import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import '../Styles/Calendar.scss';

function CalendarDog() {
const [date, setDate] = useState(new Date())
const [service, setService] = useState('')


const handleDateChange = (newDate) => {
    setDate(newDate)
}

const handleServiceChange = (e) => {
    setService(e.target.value)
}



const handleSubmit = () => {
    console.log('date:', date)
    console.log('service:', service)


    setDate(new Date())
    setService('')
}

return (
    <div className="calendar">
    <div className="left">
      <h1>Schedule your treatment</h1>

    <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}  >
        
          <DemoContainer components={['DateTimePicker']}>
            <DateTimePicker label="Basic date time picker" value={dayjs} onChange={handleDateChange} />
          </DemoContainer>
        </LocalizationProvider>
        </div>
    </div>

    <div className="service">
      <label className="label" htmlFor="service">
        Service:
      </label>
      <input type="text" id="service" value={service} onChange={handleServiceChange} />

     

      <button className="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  </div>
);
}

export default CalendarDog