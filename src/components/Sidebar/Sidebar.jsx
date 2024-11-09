import React from 'react'
import  { useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'

const Sidebar = () => {
  const [extended, setExtended] = useState(false)
  return (
    <div className="sidebar">
        <div className="sidebar_top">
          <div className="Menu">  
            <img onClick={()=>setExtended(prev=>!prev)} src=  {assets.menu_icon} alt="" />  
          </div>
          <div className="Newchat">
            <img src=  {assets.plus_icon} alt="" />
            {extended?<p>New Chat</p>:null}
          </div>
          {extended?<div className="recent">
            <p className="recent_title">Recent</p>
            <div className="recent_chats">
              <img src=  {assets.message_icon} alt="" />
              <p>What is react..</p>
            </div>
          </div>
          :null}

          

        </div>
        <div className="sidebar_bottom"> 
          <div className="bottom-parts">
            <img src= {assets.question_icon} alt="" />
            {extended?<p>Help</p>:null}
           

          </div>
          <div className="bottom-parts">
            <img src= {assets.history_icon} alt="" />
            {extended?<p>History</p>:null}
           

          </div>
          <div className="bottom-parts">
            <img src= {assets.setting_icon} alt="" />
            {extended?<p>Settings</p>:null}
           

          </div>
      

        
        </div>   

      
    </div>
  )
}

export default Sidebar
