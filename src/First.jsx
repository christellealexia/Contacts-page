import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function First(props) {
  

  return (
    <>
      <div className="contact-card">
                <img src={props.img}/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src="./src/assets/images/phone.jpg" />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img src="./src/assets/images/mail.jpg" />
                    <p>{props.email}</p>
                    </div>
                    </div>
    </>
  )
}


