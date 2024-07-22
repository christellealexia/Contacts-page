import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { First } from './First' 

function App() {
  

  return (
    <>
    <div className='flex'>
      <First
       img="./src/assets/images/cat3.jpg" 
       name="Mr. Whiskerson"
       phone="(212) 555-1234"
       email="mr.whiskaz@catnap.meow"
      />
      <First
      img="./src/assets/images/cat6.png"
      name="Fluffykins"
      phone="(212) 555-2345"
      email="fluff@me.com"
      />
      <First
      img="./src/assets/images/cat2.jpeg"
      name="Felix"
      phone="(212) 555-4567"
      email="thecat@hotmail.com"
      />
      <First
       img="./src/assets/images/cat5.png"
       name="Pumpkin"
       phone="(0800) CAT KING"
       email="pumpkin@scrimba.com"
      />
</div>
    </>
  )
}

export default App

/* <div className="contact-card">
                <img src="./src/assets/images/cat5.png"/>
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    <img src="./src/assets/images/phone.jpg" />
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <img src="./src/assets/images/mail.jpg" />
                    <p>mr.whiskaz@catnap.meow</p>
                    </div> */
                    