import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar_top">
          <div className="Menu">  
            <img src=  {assets.menu_icon} alt="" />  
          </div>
          <div className="Newchat">
            <img src=  {assets.plus_icon} alt="" />
            <p>New Chat</p>
          </div>
          <div className="recent">
            <p className="recent_title">Recent</p>
            <div className="recent_chats">
              <img src=  {assets.message_icon} alt="" />
              <p>What is react..</p>
            </div>
          </div>

          

        </div>
        <div className="sidebar_bottom"> 
          <div className="bottom-parts">
            <img src= {assets.question_icon} alt="" />
            <p>Help</p>
           

          </div>
          <div className="bottom-parts">
            <img src= {assets.history_icon} alt="" />
            <p>History</p>
           

          </div>
          <div className="bottom-parts">
            <img src= {assets.setting_icon} alt="" />
            <p>Settings</p>
           

          </div>
      

        
        </div>   

      
    </div>
  )
}

export default Sidebar
