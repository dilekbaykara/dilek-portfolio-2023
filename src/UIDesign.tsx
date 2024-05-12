import React from "react";
import UI1 from "./../src/images/cc-ui.png";

function UIDesign() {
  return (
    <div className="ui-div">
      <div id="ui-title">UI Design</div>
      <div id="ui-img-div">
      <img alt="ui1" src={UI1} id="cc-ui"></img>
      </div>
    </div>
  );
}

export default UIDesign;
