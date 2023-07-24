// import logo from './logo.svg';
import './App.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import 'bulma/css/bulma.css'
import SiriImage from './images/siri.png';
function App() {
  return (
    <div>
      personal digital assistant
      {/* <input type='number' min={5} max={15} style = {{ border: '2px solid yellow' }}/>
      <div>
      <textarea autoFocus = 'true' />
      </div>
      {new Date().toLocaleTimeString()} */}
      <ProfileCard title= 'alexa' handle= '@alexa99' image= {AlexaImage} />
      <ProfileCard title= 'cortana' handle= '@cortana54' image= {CortanaImage} />
      <ProfileCard title= 'siri' handle= '@siri44' image= {SiriImage}/>
    </div>
    
  );
}

export default App;
