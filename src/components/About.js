import { Await, Outlet } from "react-router-dom";
import React from "react";
import ProfilefunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";
 class About extends Component {
  constructor(props){
    super(props);
    console.log("parent - constructor");
  }
     componentDidMount() {
      // const data = fetch("https://api.github.com/users/sujathareddy9");
      // const json = await data.json();
    
    console.log("parent - componentDidMount");
    // Best place to make an Api call.
  }
  render() {
    console.log("parent - render");
  return (
    <div>
      <h1>About Us </h1>
      {""}
      <p>This is the namaste react live course chapter 07- finding the path</p>
      <ProfilefunctionalComponent />
      <Profile />
    </div> 
  );
}
}
export default About;
// LIFE CYCLE
// 1. parent constructor
// 2. parent render
// 3. child constructor
// 4. child render.
// 5. child componentDidMount.
// 6. parent componentDidMount.


