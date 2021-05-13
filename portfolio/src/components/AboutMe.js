import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Profile from "../assets/sumedha.jpg";
const AboutMe = () => {
    return (
     
      <div className="about" style={{fontFamily:" 'Newsreader', serif"}} id="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container >
          <Row className="pt-3 pb-5 align-items-center">
            <Col  md={3}>
              <Row className="justify-content-center mb-2 mr-2">
              <Image className="rounded-circle" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={9}>
              <Row className=" align-items-start p-2 ">
                <div className="box" >
                Hi there! I am <strong>&nbsp;Sumedha Agasimani</strong>
                <br />I am student, and increasing my profile with skills. I know the basics of  C programming, Python programming. 
                <br />
                 I am persuing  my engineering with specialization in 'Computer Science And Engineering' and graduate in 2021.
                <br />Studying in "KLE Dr M.S Sheshgiri College Of Engineering And Technology."
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/13oc01sPn3bn2tRO7C9AmQL9i0YUgf-Ex/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/sumedhasmile" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/sumedha-agasimani-5811b7192/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    
    )
}

export default AboutMe
