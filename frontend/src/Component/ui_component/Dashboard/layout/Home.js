import React, { Component } from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
class Home extends Component {
  render() {
    return (
      <div>
        <HomeWrapper>
          <div className="card">
            <center>
              <div className="card-title" style={{ padding: "20px" }}>
                Welcome to the Dashboard
              </div>
            </center>
            <div className="card-body">
              <div className="row" style={{ paddingBottom: "50px" }}>
                <div className="col-md-6">
                  <Card bg="light" style={{ width: "28rem" }}>
                    <Card.Body>
                      <Card.Text>
                        <center>
                          <i
                            className="metismenu-icon pe-7s-culture"
                            style={{ fontSize: "80px" }}
                          />
                        </center>
                      </Card.Text>
                    </Card.Body>
                    <Card.Header>
                      <h5 style={{ fontSize: "18px", margin: "0 auto" }}>
                        List of Hotels
                      </h5>
                    </Card.Header>
                  </Card>
                </div>

                <div className="col-md-6">
                  <Card bg="light" style={{ width: "28rem" }}>
                    <Card.Body>
                      <Card.Text>
                        <center>
                          <i
                            className="metismenu-icon pe-7s-photo"
                            style={{ fontSize: "80px" }}
                          />
                        </center>
                      </Card.Text>
                    </Card.Body>
                    <Card.Header>
                      <h5 style={{ fontSize: "18px", margin: "0 auto" }}>
                        Upload an image of Hotel
                      </h5>
                    </Card.Header>
                  </Card>
                </div>
              </div>
              <div className="row" style={{ paddingBottom: "50px" }}>
                <div className="col-md-6">
                  <Card bg="light" style={{ width: "28rem" }}>
                    <Card.Body>
                      <Card.Text>
                        <center>
                          <i
                            className="metismenu-icon pe-7s-users"
                            style={{ fontSize: "80px" }}
                          />
                        </center>
                      </Card.Text>
                    </Card.Body>
                    <Card.Header>
                      <h5 style={{ fontSize: "18px", margin: "0 auto" }}>
                        Members
                      </h5>
                    </Card.Header>
                  </Card>
                </div>
                <div className="col-md-6">
                  <Card bg="light" style={{ width: "28rem" }}>
                    <Card.Body>
                      <Card.Text>
                        <center>
                          <i
                            className="metismenu-icon pe-7s-note2"
                            style={{ fontSize: "80px" }}
                          />
                        </center>
                      </Card.Text>
                    </Card.Body>
                    <Card.Header>
                      <h5 style={{ fontSize: "18px", margin: "0 auto" }}>
                        Review ans Rating
                      </h5>
                    </Card.Header>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </HomeWrapper>
      </div>
    );
  }
}

export default Home;
const HomeWrapper = styled.section`
  font-family: " Girassol", cursive;
`;
