import cloudSun from '../assets/cloudsun.png';


// Weather structure component
function Weather(){
  return(
    <div style={{display: 'flex', width: '100%', gap: '5px'}}>
      <img src={cloudSun} width="60" />         
      <div style={{}}>
        <h1 style={{margin: '0'}}>San Francisco</h1>
        Cloudy
      </div>
    </div>
  )
};

export default Weather;