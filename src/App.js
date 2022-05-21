import './App.css';
import Navbar from './componants/navbar';
import React, {useState} from "react";
import Twitter from './componants/Twitter';
import Resume from './componants/Resume';
import Home from './componants/Home';
import Picture from "./images/IMG.jpg"

function App() {
  const [navbarActivate, setNavbarActivate] = useState(false);
  const [twitterActive, setTwitterActive] = useState(false);
  const [resumeActive, setResumeActive] = useState(false);
  const [getHubActive, setGetHubActive] = useState(false);
  const [homeActive, setHomeActive] = useState(true);
  const appletSetters = [setTwitterActive,setResumeActive,setGetHubActive, setHomeActive];

  const deactiveApplet = (e) => {
    appletSetters.forEach((applet) => {
      applet(false);
      setNavbarActivate(false);
    });
    if(e === `twitter`) {
      setTwitterActive(!twitterActive);
      return ;
    } else if(e === `gethub`) {
      setGetHubActive(!getHubActive);
      return ;
    } else if(e === `resume`) {
      setResumeActive(!resumeActive);
      return ;
    } else if(e === `home`) {
      setHomeActive(true);
    }
  };

  const handleNavbarEvent = () => {
    setNavbarActivate(!navbarActivate);
    console.log(navbarActivate);
  }

  return (<>
      <span id="button-container">
        <button className="menubutton" hidden={navbarActivate} onClick={handleNavbarEvent}><strong>≡</strong></button>
        <button className="home" hidden={navbarActivate} onClick={() => deactiveApplet('home')}><strong>⌂</strong></button>
      </span>
      <Navbar className={`placeholder`} onNavbarSelection={deactiveApplet} navbarActive={navbarActivate} onNavbarToggle={handleNavbarEvent}/>
      {homeActive && <Home picture={Picture}/>}
      {twitterActive && <Twitter />}
      {resumeActive && <Resume />}
      {getHubActive && <Resume />}
    </>);
}

export default App;
