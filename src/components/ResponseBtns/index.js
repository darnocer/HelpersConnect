import React from "react";
import "./style.css";

function ResponseBtns() {
  return (
    <div className="col-2">
      <div className="has-text-centered flexbox">
        <button className="button is-large mb-2 mb-md-0 accept">
          <i class="far fa-calendar-check"></i>
        </button>
        <button className="button is-large decline">
          <i class="far fa-calendar-times"></i>
        </button>
      </div>
    </div>
  );
}
export default ResponseBtns;
