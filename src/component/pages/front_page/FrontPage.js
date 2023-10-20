import React from "react";
import "../../styles/style.css";
import image from "../../../resources/img/favicon.png";
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';

export default function FrontPage() {
  return (
    <div className="frnt-pg">
      <div className="container-fluid">
        <div className="row">
          <img src={image} alt="user" className="frnt-img col-sm-12 col-md-4" />
          <div className="col-sm-12 col-md-8 frnt-txt">
            <div className="frnt-hdn-txt">
              Hello, it's me
              <div className="frnt-hdn-nm">
                Hasindu <span className="sub-txt">Eshan</span>
              </div>
              <div className="frnt-hdn-desc">
                As a passionate full-stack developer, I specialize in crafting
                engaging front-end and back-end applications, backed by years of
                hands-on experience in web development.
              </div>
              <div>
                <AwesomeButton
                  type="secondary"
                  className="aws-btn"
                  onPress={() => {
                    console.log("pressed");
                  }}
                >
                  More About..
                </AwesomeButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
