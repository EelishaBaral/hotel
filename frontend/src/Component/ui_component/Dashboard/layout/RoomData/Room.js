import React, { Component } from "react";
import styled from "styled-components";

class Room extends Component {
  render() {
    return (
      <div>
        <roomWrapper>
          <div classname="app-main__outer">
            <div classname="app-main__inner">
              <div classname="app-page-title">
                <div className="main-card mb-3 card">
                  <h5 style={{ padding: "10px" }}>
                    <center>Information about Hotel</center>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </roomWrapper>
      </div>
    );
  }
}

export default Room;
const roomWrapper = styled.section`
  font-family: " Girassol", cursive !important;
`;
