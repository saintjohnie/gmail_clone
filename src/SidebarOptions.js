import React from "react";
import "./SideBarOption.css";
export default function SidebarOptions({ title, Icon, number,selected}) {
  return (
    <div className={`SidebarOptions ${selected&&"sidebarOption--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}
