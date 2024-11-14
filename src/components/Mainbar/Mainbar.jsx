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
                    <p>Suggest places to visit in Kashmir</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Explain about Blockchain,smart contracts,IPFS</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>AI Model Training Dataset,Dtaset for training model for API Documentation</p>
                    <img src={assets.code_icon} alt="" />
                </div>
                <div className="card">
                    <p>IEEE Citation Formating</p>
                    <img src={assets.message_icon} alt="" />
                </div>  
            </div>
            <div className="main_bottom">
                <div className="search_box">
                    <input type="text" placeholder="Enter a prompt here"/>
                    
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom_text">Powered by Gemini</p>

            </div>                

        </div>
    </div>
    
  
  )
}

export default Mainbar
