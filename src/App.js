import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';
const localizer = momentLocalizer(moment) // or globalizeLocalizer

const App = () => {
  return (
    // if it was a regular calendar i wouldn't have said anything
    // but you had to get the biiiiiig calendar!
    <div className="App">
      <div className="myCustomHeight">
    <Calendar
      localizer={localizer}
      // events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 800 }}
    />
  </div>
    </div>
  );
}

export default App;
