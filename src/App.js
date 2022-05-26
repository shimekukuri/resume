import './App.css';
import Navbar from './componants/navbar';
import React, {useState, useEffect} from "react";
import Twitter from './componants/Twitter';
import Resume from './componants/Resume';
import Home from './componants/Home';
import Picture from "./images/IMG.jpg"
import Blog from './componants/Blog';

function App() {
  const [navbarActivate, setNavbarActivate] = useState(false);
  const [twitterActive, setTwitterActive] = useState(false);
  const [resumeActive, setResumeActive] = useState(false);
  const [getHubActive, setGetHubActive] = useState(false);
  const [blogActive, setBlogActive] = useState(false);
  const [homeActive, setHomeActive] = useState(true);
  const[blogList, setBlogList] = useState([])
  const appletSetters = [setTwitterActive,setResumeActive,setGetHubActive, setHomeActive, setBlogActive];

  let PROJECT_ID = "s4fylfy4";
  let DATASET = "production";
  let QUERY = encodeURIComponent('*[_type == "post"]');

  // Compose the URL for your project's endpoint and add the query
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
  
  useEffect (() => {fetch(URL)
      .then((response) => {
          if (!response.ok) {
              throw new Error(`HTTP error ${response.status}`);
          }
          return response.json()})
          .then((data) => {
          setBlogList(data.result)
      }).catch((error) => console.error(error));
      console.log(blogList);
  },[]);

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
    } else if(e === `blog`) {
      setBlogActive(!blogActive);
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
      {blogActive && <Blog blogList={blogList} url={URL}/>}
    </>);
}

export default App;
