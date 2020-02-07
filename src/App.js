import React, {useState, useEffect} from "react";
// import axios from "axios";
import axios from "axios";
import Post from "./Post"

import "./App.css";


function App() {
   // Initialize state to hold image
    
   const [data, setData] = useState("");
    
   console.log(data);

   useEffect (() => {
     axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
   } ,[]);


  return (
   

    <div className="App">
      <p>
        NASA Photo Of The Day
      </p>
      <Post spacePic = {data}/>

    </div>
  );
}

export default App;


