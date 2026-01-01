import { WeekDays } from './weekdays';

// Days Component
function Days(){
  const weekDays = [
    { day:  'Tue', topDegree: '67&deg;', bottomDegree: '54&deg;', id: 'id1'},
    { day:  'Wed', topDegree: '72&deg;', bottomDegree: '55&deg;', id: 'id2'}, 
    { day:  'Thu', topDegree: '65&deg;', bottomDegree: '55&deg;', id: 'id3'}, 
    { day:  'Fri', topDegree: '64&deg;', bottomDegree: '55&deg;', id: 'id4'}, ]


  return(
    <div style={{display: 'flex', marginTop: '10px',}}>
      {weekDays.map((weekDay) =>{
        return(
          <>
            <WeekDays 
              day={weekDay.day}
              topDegree={weekDay.topDegree}
              bottomDegree={weekDay.bottomDegree}
              key={weekDay.id}
            />
          </>
        )
        })
      }
    </div>
  );

};

export default Days;
