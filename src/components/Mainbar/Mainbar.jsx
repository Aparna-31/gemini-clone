import React from 'react'
import './Mainbar.css'
import { assets } from '../../assets/assets'

const Mainbar = () => {
  return (
    <div className="main">
        <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
        </div>
        <div className = "main_container">
            <div className="greet">
                <p><span>Hello, Aparna.</span></p>
                <p>How can I help you today?</p>

            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest places to visit</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Explain about Blockchain</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>AI Model Training Dataset</p>
                    <img src={assets.code_icon} alt="" />
                </div>
                <div className="card">
                    <p>IEEE Citation Formating</p>
                    <img src={assets.message_icon} alt="" />
                </div>  
            </div>

        </div>
    </div>
    
  
  )
}

export default Mainbar
