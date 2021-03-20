import React, { useEffect } from "react";
import "./EmailRow.css";
import { Checkbox, IconButton } from "@material-ui/core";
import StartBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedMail } from "./features/counter/mailSlice";

export default function EmailRow({ subject, id, description, title,time }) {
const dispatch=useDispatch()
const history=useHistory()

    const openMail = () => {
        dispatch(selectedMail({
            id,subject,description,time
        }));
        history.push("/mail")
    };
    
  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StartBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <div className="emailRow_title">{title} </div>
      <div className="emailRow_message">
        <h4>
          {subject}- <span className="emailRow_description">{description}</span>
        </h4>
      </div>
      <p className="emailRow_time">{time}</p>
    </div>
  );
}
