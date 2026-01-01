import cloudSun from '../assets/cloudsun.png';
import cloud from '../assets/cloud.avif';
import rain from '../assets/rain.png';
import sun from '../assets/sun.avif';


// Weekdays Component
function WeekDays({day, topDegree, bottomDegree}){
  return(
    <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{backgroundColor: 'white', margin: '10px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '15px 20px', cursor: 'pointer', borderRadius: '10px', border: '1px solid grey', boxShadow: '4px 5px 5px 0px rgba(0, 0, 0, 0.5)'}}>
        <div style={{fontWeight: '600', marginBottom: '10px', fontSize: '18px'}}>
          {day}
        </div>

          { day === 'Tue' && <img src={cloudSun} width="40" /> }
          { day === 'Wed' && <img src={sun} width="40" /> }
          { day === 'Thu' && <img src={cloud} width="40" /> }
          { day === 'Fri' && <img src={rain} width="40" /> }

        <div style={{margin: '15px 0 0 0'}}>

          { day === 'Tue' && <p style={{color: 'red', fontWeight: '600', margin: '0', fontSize: '20px'}}>67&deg;</p>}

          { day === 'Wed' && <p style={{color: 'red', fontWeight: '600', margin: '0', fontSize: '20px'}}>72&deg;</p>}

          { day === 'Thu' && <p style={{color: 'red', fontWeight: '600', margin: '0', fontSize: '20px'}}>65&deg;</p>}

          { day === 'Fri' && <p style={{color: 'red', fontWeight: '600', margin: '0', fontSize: '20px'}}>64&deg;</p>}

          </div>

          { day === 'Tue' &&  <p style={{color: 'blue', fontWeight: '600', margin: '0', fontSize: '20px'}}>54&deg;</p>}

          { day === 'Wed' &&  <p style={{color: 'blue', fontWeight: '600', margin: '0', fontSize: '20px'}}>55&deg;</p>}

          { day === 'Thu' &&  <p style={{color: 'blue', fontWeight: '600', margin: '0', fontSize: '20px'}}>56&deg;</p>}

          { day === 'Fri' &&  <p style={{color: 'blue', fontWeight: '600', margin: '0', fontSize: '20px'}}>55&deg;</p>}

      </div>
      
    </div>
  );

};

export default WeekDays;