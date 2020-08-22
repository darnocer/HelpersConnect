import React from "react";
import "./style.css";

function ResponseBtns() {
  return (
    <div className="btnDiv has-text-centered p-3">
      <btn className="button mx-1">
        <i class="fas fa-check-circle"></i>
      </btn>
      <btn className="button mx-1">
        <i class="fas fa-times-circle"></i>
      </btn>
    </div>
  );
}
export default ResponseBtns;
