import * as React from 'react';
import Team1 from "./mentor.jpg";
import Team2 from "./mentor.jpg";
import Team3 from "./mentor.jpg";
import Team4 from "./mentor.jpg";

function Team() {
    return (
      <div>
      <div class="container"> 
        <div class="image">
           <img src={Team1} className="app-logo"alt="logo"></img>
           <h1>Name</h1>
           <h1>Computer Science</h1>
           <h1>Linkedin</h1>
           <h1>Values</h1>
        </div>
        <div class="image">
           <img src={Team2} className="app-logo"alt="logo"></img>
           <h1>Name</h1>
           <h1>Computer Science</h1>
           <h1>Linkedin</h1>
           <h1>Values</h1>
        </div>
        <div class="image">
           <img src={Team3} className="app-logo"alt="logo"></img>
           <h1>Name</h1>
           <h1>Computer Science</h1>
           <h1>Linkedin</h1>
           <h1>Values</h1>
        </div>
        <div class="image">
           <img src={Team4} className="app-logo"alt="logo"></img>
           <h1>Name</h1>
           <h1>Computer Science</h1>
           <h1>Linkedin</h1>
           <h1>Values</h1>
        </div>  
      </div>
  </div>
      );

}

export { Team };