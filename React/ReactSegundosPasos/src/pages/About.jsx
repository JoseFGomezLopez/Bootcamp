import { useState } from "react";

const About = () => {
  
    const [word, setWord] = useState("");

  
    return( 
  <div>
    <input type="text" onChange={(e)=>setWord(e.target.value)} />
    <h2>{word}</h2>  
  </div>
  
  )
}
export default About;
