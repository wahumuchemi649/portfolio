import { useState } from 'react'

import { FaRegHandPaper } from 'react-icons/fa'
import { FaGraduationCap, FaCode,FaChartBar } from 'react-icons/fa'
import{ FaLinkedin, FaGithub, FaTwitter,FaLocationArrow } from 'react-icons/fa'
import{ SiGmail, SiPhonepe} from 'react-icons/si'
import './App.css'
import degrees from './assets/degrees.png'
import HeadSpace from './assets/Headspace.png'


function App() {
  return (
<>
 <header>
      <h1>Portfolio</h1>
     <div className='navbar'>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

     </div>
    </header>
  <div className='header'>
   
    <div className='home' id='home'>
  <div className='intro'>
     <div className='wave'> <FaRegHandPaper size={20} color={"#eeba0dff"}/> Hello I'm </div>
     <h2 className='name'>Wahu Muchemi</h2>
     <p>A software engineering student and an aspiring data scientist</p>
    </div>
    <p className='brief'>Passionate about building web applications and extracting insights from data. Experienced with Django, React, and modern web technologies, with a strong interest in machine learning and data analytics.</p>
      <div className='button'>
 <a className='button1' href='#projects'>View Projects</a>
  <a className='button2' href='#contact'>Get in touch</a>
  </div>
    </div>
  
  </div>
  
  <div id='about' className='about'>
    <h1>About Me</h1>
    
    <div className='aboutClause'>
      <div className='details'>
<p>I'm a dedicated software engineering student with a passion for creating efficient, scalable web applications and uncovering insights through data analysis.</p>
      </div>      
      <div className='aboutCard'>
        <FaGraduationCap size={60} color={"#059669"}/>
        <div>
          <h3>Education</h3>
        <p>Software Engineering Student</p>

        </div>
        
      </div>
    </div>

    <div className='aboutClause'>
      <div className='details'>
<p>My journey began with web development, working with Django and React to build full-stack applications. As I progressed, I discovered my fascination with data science and the power of machine learning to solve real-world problems.</p>
      </div>
      <div className='aboutCard'>
        <FaCode size={60} color={"#059669"}/>
        <div>
        <h3>Development</h3>
        <p>Full stack developer with django and react</p>
        </div>
      </div>
    </div>
  
  <div className='aboutClause'>
    <div className='details'>
<p>Currently, I'm focusing on expanding my expertise in data analytics, machine learning, and statistical modeling while continuing to sharpen my software development skills.</p>
    </div>
  <div className='aboutCard'> 
    <FaChartBar size={60} color={"#059669"}/>
    <div>
    <h3>Data Science</h3>
    <p>Machine learning & data analytics enthusiast</p>
    </div>
    </div>
    </div>
  </div>

 {/* <div id='skills' className='skills'>
    <h1>Skills&Technologies</h1>
    <hr />
    <p>A comprehensive overview of my technical skills and proficiency levels</p>
    

  </div>*/}
  <div id='projects' className='projects'>
    <h1>Featured Projects</h1>
    <p>A showcase of my recent work in web development and data science</p>
    <hr />
    <div className='Allprojects'>
   <div className='projectCard'>
      <img src={degrees} alt="Degrees Project" />
      <h6>A company Website</h6>
      <p>A descriptive website of a consulting agency, that is just starting out. Built with react and CSS</p>
      <a href='https://github.com/wahumuchemi649/47degrees'>code</a>
      <a href='https://47degrees.netlify.app/' className='projectLink'>Demo</a>
      <div className='lang'>
        <p>React</p>
        <p>CSS</p>
      </div>

    </div>
    <div className='projectCard'>
      <img src={HeadSpace} alt="Headspace Project" />
      <h6>A healing-tracking system</h6>
      <p>Though still under development, HeadSpace is a system that seeks to improve traditional therapy systems by tracking the chat system of a therapists and a client and from that track the clients healing system</p>
      <p>Built with django, React, CSS, Rest API</p>
      <div className='projectLinks'>
      <a href='https://github.com/wahumuchemi649/HeadSpace/tree/master' >code</a>
      <a href='https://headspace-therapy-system.onrender.com/' >Demo</a>
      </div>
      
      <div className='lang'>
        <p>React</p>
        <p>CSS</p>
      </div>

    </div>
     <div className='projectCard'>
      <img src={HeadSpace} alt="Headspace Project" />
      <h6>A healing-tracking system</h6>
      <p>Though still under development, HeadSpace is a system that seeks to improve traditional therapy systems by tracking the chat system of a therapists and a client and from that track the clients healing system</p>
      <p>Built with django, React, CSS, Rest API</p>
      <div className='projectLinks'>
      <a href='https://github.com/wahumuchemi649/HeadSpace/tree/master' >code</a>
      <a href='https://headspace-therapy-system.onrender.com/' >Demo</a>
      </div>
      
      <div className='lang'>
        <p>React</p>
        <p>CSS</p>
      </div>

    </div>
    </div>
    </div>

    <div id='contact' className='contact'>
      <h1>Get In Touch</h1>
      <p>Have a project or want to collaborate? Feel free to reach out</p>

      <div className='contactLinks'>
        <div className='handles'>
          <h5>Contact Information</h5>
          <p><SiGmail size={40} color='#059669'/> <strong>Email:</strong>lydiamuchemi260@gmail.com</p>
          <p><SiPhonepe size={40} color='#059669'/><strong>Phone</strong>+254 57438047</p>
          <p><FaLocationArrow size={40} color='#059669' /><strong>Locatiom</strong>Kisii, Kenya</p>
         <div className='git'><strong>Connect with me: <a href='https://github.com/wahumuchemi649'>Github</a></strong></div> 
        

        </div>
        <div className='message'>
          <h5>Send a Message</h5>
          <form>
            <input type='text' placeholder='Your Name' required />
            <input type='email' placeholder='Your Email' required />
            <textarea placeholder='Your Message' required></textarea>
            <button type='submit'>Send Message</button>
          </form>

        </div>
      </div>
    
    </div>
    <hr />
    

  
 
  </>
  )
  
}

export default App
