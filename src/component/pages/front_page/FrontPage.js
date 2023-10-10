import React from "react";
import "../../styles/style.css";
import image from "../../../resources/img/favicon.png";

export default function FrontPage() {
  return (
    <div className="frnt-pg">
      <div className="container-fluid">
        <div className="row">
          <img src={image} alt="user" className="frnt-img col-sm-12 col-md-4" />
          <div className="col-sm-12 col-md-8 frnt-txt">
            <div className="frnt-hdn-txt">
              Hello, it's me
              <div className="frnt-hdn-nm">Hasindu Eshan</div>
              <div className="frnt-hdn-desc">
                A Passionate Full Stack Developer about creating interactive
                front-end and back-end applications and experience on web.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
