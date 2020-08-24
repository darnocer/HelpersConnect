import React from "react";
import "./style.css";

function ResponseBtns() {
  return (
    <div className="col-3 test">
      <div className="has-text-centered flexbox">
        <btn className="button mb-2">
          <i class="far fa-calendar-check"></i>
        </btn>
        <btn className="button">
          <i class="far fa-calendar-times"></i>
        </btn>
      </div>
    </div>
  );
}
export default ResponseBtns;
