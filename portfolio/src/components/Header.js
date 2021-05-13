import React from 'react'
import Typed from 'react-typed';
const Header = () => {
    return (
       <div className="header-wraper" id="home">
           <div className="main-info">
               <h1>Hi I am </h1>
               <h1>Sumedha Agasimani</h1>
               <Typed
                className="typed-text"
                strings ={["Website Designed", "By.....","Me....."]}
                backSpeed={50}
                typeSpeed={40}
                loop
                />
                <a href="#contact" className="button-main" >Contact Me</a>
           </div>
       </div>
    )
}

export default Header