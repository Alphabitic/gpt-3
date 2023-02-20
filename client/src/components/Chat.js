import React from 'react';
import "./Apps.css";
import { useState } from "react";
import Avatar from "../components/Avatar";
import Loading from "../components/Loading";
import Error from "../components/Error";
import BotResponse from "../components/BotResponse";
import IntroSection from "../components/IntroSection";
import SendIcon from '@material-ui/icons/Send';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';

function Chat() {
  const [showMenu, setShowMenu] = useState(false);
  const [inputPrompt, setInputPrompt] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setChatLog([...chatLog, { chatPrompt: inputPrompt }]);
    async function callAPI() {
      try {
        const response = await fetch("http://localhost:5000/chatbot/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: inputPrompt }),
        });
        const data = await response.json();
        setChatLog([
          ...chatLog,
          {
            chatPrompt: inputPrompt,
            botMessage: data.botResponse,
          },
        ]);
        setErr(false);
      } catch (err) {
        setErr(err);
      }
    }
    callAPI();
    setInputPrompt("");
  };

  return (
    <div className="app">
      

    

      <section className="chat_container">
      <form onSubmit={handleSubmit}>
 
        <textarea
              name="inputPrompt"
              id=""
              className="inputPrompttTextarea"
              type="text"
              rows="1"
              cols="1" 
              placeholder="Posez votre question..."
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              autoFocus
            ></textarea>
        <button type="submit"> <SendIcon style={{ color: '#FF6600', transform: 'rotate(45deg)' }} /></button>
      </form>
      <div className='result' style={{ overflowX: 'break-word' }}>
  {chatLog.length > 0 ? (
    <div>
      {chatLog.length > 0 &&
        chatLog.map((chat, idx) => (
          <div key={idx}>
   
              <PermIdentityIcon style={{ color: '#FF6600' }} /> :
              <span style={{ marginLeft: '15px', color: '#FF6600'}}>{chat.chatPrompt}</span>
            <br />
            <div style={{ color: 'white' }}>
             
            <SortByAlphaIcon />  
              {chat.botMessage ? (
         
<div style={{ color: 'white', display: 'flex', alignItems: 'center',marginLeft: '15px' }}>
 
  <BotResponse style={{ marginLeft: '15px', color: 'white', wordBreak: 'break-all' }} response={chat.botMessage} />
</div>
              ) : err ? (
                <Error err={err} />
              ) : (
                <Loading />
              )}
            </div>
          </div>
        ))}
      <div ref={(el) => { if (el) { el.scrollIntoView({ behavior: 'smooth' }); } }} />
    </div>
  ) : (
    <IntroSection />
  )}
</div>
      </section>
      
    </div>
  );
}

export default Chat;