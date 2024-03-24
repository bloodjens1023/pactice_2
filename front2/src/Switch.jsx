import React from "react";

const Switch = ({ id, nom }) => {
  return (
    <div class="switch-holder">
      <div class="switch-label">
        <i class="fa fa-bluetooth-b"></i>
        <span>
          {nom} numero {id}
        </span>
      </div>
      <div class="switch-toggle">
        <input type="checkbox" id="bluetooth" />
        <label for="bluetooth"></label>
      </div>
    </div>
  );
};

export default Switch;
