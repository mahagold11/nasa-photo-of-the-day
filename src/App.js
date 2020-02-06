import React, {useState, useEffect} from "react";
// import axios from "axios";
import axios from "axios";


import "./App.css";


function App() {
   // Initialize state to hold image
    
   const [spacePic, setSpacePic] = useState("");


   useEffect (() => {
     axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => setSpacePic(res.data.url))
      .catch(err => console.log(err));
   } ,[]);


  return (
   

    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <img src={spacePic} alt="space pic of the day"/>

    </div>
  );
}

export default App;


