import React, { Component } from "react";
import Container from "../components/Container";
import Col from "../components/Col";

function Contact(){
  return(
    <Container>
      <h1>Contact</h1>
      <Col size="md-12">
        <p>Email: hankshadow2000@yahoo.com</p>
        <br>
        </br>
        <p>Phone: 912-656-8706</p>
        <br>
        </br>
        <a href = "https://www.linkedin.com/in/hank-miles-706a83132/" alt="LinkedIn">LinkedIn</a>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <a href ="https://drive.google.com/file/d/1lMek0cixOYTbX1-ii9_L7kq9MQEG0O50/view?usp=sharing" alt="Resume">Resume</a>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <a href = "https://github.com/hmiles3" alt="Github">Github</a>
      </Col>
    </Container>
  )
}

export default Contact;