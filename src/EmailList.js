import React, { useEffect, useState } from "react";
import "./EmailList.css";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CheveronLeftIcon from "@material-ui/icons/ChevronLeft";
import CheveronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import InboxIcon from "@material-ui/icons/Inbox";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebase";
import moment from 'moment'

export default function EmailList() {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    db.collection('emails').orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    });
  });

  return (
    <div className="emailList">
      <div className="emailList_setting">
        <div className="emailList_settingLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList_settingRight">
          <IconButton>
            <CheveronLeftIcon />
          </IconButton>
          <IconButton>
            <CheveronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList_section">
        <Section Icon={InboxIcon} title="Primary" color="red" selected={true} />
        <Section Icon={PeopleIcon} title="Social" color="#1a73e8" />
        <Section Icon={LocalOfferIcon} title="Promotion" color="green" />
      </div>
      <div className="emailRow_container">
        {emails.map(({ id, data }) => (
          <EmailRow
            key={id}
            id={id}
            title={data.to}
            subject={data.subject}
            description={data.message}
            // time={new Date(data.timestamp?.seconds * 1000).toString()}
          time={moment.unix(data.timestamp).format("MMMM Do ,h:mma")}
          />
        ))}
        
       
      </div>
    </div>
  );
}
