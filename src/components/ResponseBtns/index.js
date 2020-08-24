import React from "react";
import "./style.css";

function ResponseBtns() {
  return (
    <div className="has-text-centered p-3 flexbox">
      <btn className="button mr-1">
        <i class="fas fa-check-circle"></i>
      </btn>
      <btn className="button ml-1">
        <i class="fas fa-times-circle"></i>
      </btn>
    </div>
  );
}
export default ResponseBtns;
