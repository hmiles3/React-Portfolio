import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
  return (
    <div>
      <Hero>
        <h1>My React Portfolio</h1>
        <h2>Henry Miles</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            My name is Henry Miles, but I often go by Hank. I am a Georgia Tech alumnus with a degree in Literature, Media, and Communciation. While I am still trying to figure out exactly what it is that I want to do, I feel fairly certain that programming skills will come in handy for securing a more promising career. My interests lie largely in media and storytelling. I enjoy reading, watching film and television, and especially playing video games. Something about the interactive medium interests and engages me more than other forms of storytelling so I take a lot of interest in how many games use all of their components to craft a meaningful experience.            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
