import React from 'react'
import qrcode from '../assets/images/image-qr-code.png'

function Card() {
  return <>
        <div className="card" role='card'>
          <img src={qrcode} className="card-img-top" alt="qr code"/>
          <div className="card-body">
            <h1 className="card-title">Improve your front-end skills by building projects</h1>
            <p className="card-text">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
        </div>  
  </>
}

export default Card