import React from "react";
import Container from "../components/Container"
import Row from "../components/Row"
import Whiskey from "../components/Images/Whiskey.png";
import GoT from "../components/Images/GoT.png"
import Password from "../components/Images/Password.png"
import Planner from "../components/Images/Planner.png"
import Burger from "../components/Images/Burger.png"
import Fitness from "../components/Images/Fitness.png"

function Portfolio(){
  return (
    <Container>
      <h1>Portfolio</h1>
      <Row>
      <div class="col-lg-12">
        <a href ="https://hmiles3.github.io/whiskey-business/">
          <img src={Whiskey} alt="Whiskey Business"/>
        </a>
        <h2>Whiskey Business</h2>
        <p>https://github.com/hmiles3/whiskey-business</p>
      </div>
      </Row>
      <Row>
      <div class="col-lg-12">
      <a href ="https://path-to-the-iron-throne.herokuapp.com/">
        <img src={GoT} alt="Game of Thrones"/>
      </a>
      <h2>Path to the Iron Throne</h2>
      <p>https://github.com/tylerroth15/GOT-Tracker</p>
      </div>
      </Row>
      <Row>
      <div class="col-lg-12">
      <a href ="https://hmiles3.github.io/Homework-03-Password-Generator/">
        <img src={Password} alt="Password Generator"/>
      </a>
      <h2>Password Generator</h2>
      <p>https://github.com/hmiles3/Homework-03-Password-Generator</p>
      </div>
      </Row>
      <Row>
      <div class="col-lg-12">
      <a href ="https://hmiles3.github.io/Homework-05-Day-Planner/">
        <img src={Planner} alt="Work Day Scheduler"/>
      </a>
      <h2>Work Day Scheduler</h2>
      <p>https://github.com/hmiles3/Homework-05-Day-Planner</p>
      </div>
      </Row>
      <Row>
      <div class="col-lg-12">
      <a href ="https://powerful-mountain-64817.herokuapp.com/">
        <img src={Burger} alt="Eat Da Burger"/>
      </a>
      <h2>Eat Da Burger!</h2>
      <p>https://github.com/hmiles3/Node-Express-Handlebars</p>
      </div>
      </Row>
      <Row>
      <div class="col-lg-12">
      <a href ="https://workout-tracker-hm.herokuapp.com/">
        <img src={Fitness} alt="Workout Tracker"/>
      </a>
      <h2>Workout Tracker</h2>
      <p>https://github.com/hmiles3/Workout-Tracker</p>
      </div>
      </Row>
    </Container>
  );
}

export default Portfolio;
