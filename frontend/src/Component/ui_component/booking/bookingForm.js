import React, { Component } from "react";
import styled from "styled-components";
import { Card,Dropdown } from "react-bootstrap";
import Footer from "../Footer/Footer";
class bookingForm extends Component {
  state = {};
  render() {
    return (
      <>
        <FormSection>
          <div className="top" style={{ textAlign: "center" }}>
            <h5>Date of Reservation &nbsp; &nbsp; </h5>
            <input type="date" style={{ height: "25px", width: "175px" }} />
          </div>

          <br />
          <center>
            <Card style={{ width: "500px", height: "550px" }}>
              <div classname="Form">
                <h5 style={{ textAlign: "center" }}>Customer Detail</h5>
                <div className="row" style={{ paddingBottom: "20px" }}>
                  <div className="col-md-4">
                    <h6>Name</h6>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="src"
                      placeholder="Full name"
                    />
                  </div>
                </div>
                <div className="row" style={{ paddingBottom: "20px" }}>
                  <div className="col-md-4">
                    <h6>Contact no.</h6>
                  </div>
                  <div className="col-md-8">
                    <input
                      className="src"
                      type="tel"
                      placeholder="Phone Number"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      required
                    />
                  </div>
                </div>
                <div className="row" style={{ paddingBottom: "20px" }}>
                  <div className="col-md-4">
                    <h6>Email</h6>
                  </div>
                  <div className="col-md-8">
                    <input className="src" type="Email" placeholder="Email" />
                  </div>
                </div>
                <div className="row" style={{ paddingBottom: "20px" }}>
                  <div className="col-md-4">
                    <h6>Room type &nbsp; &nbsp;</h6>
                  </div>
                  <div className="col-md-8">
                  <Dropdown>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
   Choose a room type
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Deluxe</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Suit</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Normal</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
                  </div>
                </div>
                
                <div className="row" style={{ paddingBottom: "20px" }}>
                  <div className="col-md-4">
                    <h6>No.of Customer</h6>
                  </div>
                  <div className="col-md-8">
                    <input type="number" className="text" placeholder="Adult" />
                    &nbsp;
                    <input
                      type="number"
                      className="text"
                      placeholder="Children"
                    />
                  </div>
                </div>
                <div className="row" style={{ paddingBottom: "20px" }}>
                  <div className="col-md-4">
                    <h6>Check-In</h6>
                  </div>
                  <div className="col-md-8">
                    <input type="date" className="src" />
                  </div>
                </div>
                <div className="row" style={{ paddingBottom: "20px" }}>
                  <div className="col-md-4">
                    <h6>Check-Out</h6>
                  </div>
                  <div className="col-md-8">
                    <input type="date" className="src" />
                  </div>
                </div>
                <div className="row" style={{ paddingBottom: "20px" }}>
                  <div className="col-md-4">
                    <h6>Total</h6>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="number"
                      className="src"
                      placeholder="Total price"
                    />
                  </div>
                </div>
                <button type="submit" className="button1">
                  Reserve
                </button>
                &nbsp; &nbsp;
                <button type="submit" className="button2">
                  Cancel
                </button>
                &nbsp; &nbsp;
                <button type="submit" className="button3">
                  Print
                </button>
              </div>
            </Card>
            <br />
          </center>
        </FormSection>
        <Footer />
      </>
    );
  }
}

export default bookingForm;
const FormSection = styled.div`
  font-family: " Girassol", cursive;

  .top {
    margin-top: 20px;
  }

  .src {
    height: 25px;
    width: 200px;
  }
  .text {
    height: 25px;
    width: 100px;
  }
  .h6,
  h6 {
    color: #44c27b;
  }
  .h5,
  h5 {
    padding-top: 10px;
    padding-left: 20px;
    padding-bottom: 10px;
    color: #44c27b;
  }
  .button1 {
    float: left;
    margin-left: 40px;
    background: #44c27b;
    color: white;
  }
  .button2 {
    background: #44c27b;
    color: white;
  }
  .button3 {
    float: right;
    margin-right: 40px;
    background: #44c27b;
    color: white;
  }
`;