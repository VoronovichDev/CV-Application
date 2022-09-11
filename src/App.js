import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Cv from "./components/Cv";

class App extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div>
            <General />
            <Education />
            <Experience />
            <Cv />
            <div className="buttons">
               <button id="submitCv">Submit</button>
               <button id='editCv'>Edit</button>
            </div>
         </div>
      )

   }
}

export default App;
