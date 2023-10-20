import React from "react";
import "../../styles/style.css";
import image from "../../../resources/img/favicon.png";
import gmImg from "../../../resources/img/gmail.png";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function FrontPage() {
  return (
    <div className="frnt-pg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-4 dp">
            <img src={image} alt="user" className="col-sm-12 col-md-4" style={{width:"100%",marginTop:"100px"}}/>
          </div>

          <div className="col-sm-12 col-md-8 frnt-txt">
            <div className="frnt-hdn-txt">
              <div className="frnt-grt">
              Hello, it's me
              </div>
              <div className="frnt-hdn-nm">
                Hasindu<span className="sub-txt">&nbsp;Eshan</span>
              </div>
              <div className="frnt-hdn-desc">
                As a passionate full-stack developer, I specialize in crafting
                engaging front-end and back-end applications, backed by years of
                hands-on experience in web development.
              </div>
              <div className="frnt-btn">
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
              <div className="em-div">
                <img src={gmImg} alt="gmail" style={{ width: "50px" }} />
                <div className="em-txt">hasindueshandesilva@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
