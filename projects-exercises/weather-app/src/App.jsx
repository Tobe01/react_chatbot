import { Weather } from './components/weather';
import { Degree } from './components/degree';
import { Days } from './components/days';

// Main App Component
      function App(){
        return(
          <div style={{margin: 'auto', justifyContent: 'center', maxWidth: '400px', borderRadius: '15px', display: 'flex', flexDirection: 'column', padding: '20px 10px', boxShadow: '4px 5px 5px 0px rgba(0, 0, 0, 0.5)'}}>
           <Weather />
           <Degree />
           <Days />
          </div>
        )
      }

export default App