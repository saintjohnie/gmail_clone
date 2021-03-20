import React, { useState } from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { closSendMessage } from "./features/counter/mailSlice";
import { db } from "./firebase";
import firebase from'firebase'
export default function SendMail() {
  const dispatch = useDispatch();
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    
      db.collection("emails").add({
        to,
        subject,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
       
      });
      dispatch(closSendMessage())
      setTo('')
      setSubject('')
      setMessage('')
  };

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail_close"
          onClick={() => dispatch(closSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="To"
          type="text"
          onChange={(e) => setTo(e.target.value)}
          value={to}
        />
        <input
          placeholder="Subject"
          type="text"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />
        <textarea
         
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="sendMail_message"
        />
        <div className="sendMail_option">
          <button className="sendMail_send">Send</button>
        </div>
      </form>
    </div>
  );
}
