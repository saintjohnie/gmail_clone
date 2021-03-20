import React, { useState } from "react";
import "./Section.css";
export default function Section({ Icon, title, color,selected }) {
//   let [selected, setSelected] = useState(false);
  return (
    <div
      className={`section ${selected && "section--selected"}`}
      style={{
        borderBottom: `2px solid ${color}`,
        color: `${selected && color}`,
      }}
    //   onClick={() => {
    //     setSelected(!selected);
    //   }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}
