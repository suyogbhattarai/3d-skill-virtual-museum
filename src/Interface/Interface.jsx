import React, { useEffect, useRef, useState } from "react";
import "./interface.css";


function Interface({
  startTour,
  setStartTour,
 
}) {


//   const boundryRef=useRef(isWithinBoundaries);
//   useEffect(() => {
//     boundryRef.current = isWithinBoundaries;
//   }, [isWithinBoundaries]);

  return (
    <>
      <div className="interface">
        {!startTour && (
          <>
            <div className="intro">
              <div className="logo">
                <img src="./skill.png" alt="" />
              </div>

              <h1>Welcome to ING Skill Museum</h1>
              <p style={{textAlign:"justify"}}>
                We align our beliefs for students on learning not just through
                books but by encouraging them to work on an array of creative
                projects to foster their competencies. Hence, we invite you to
                explore the work of these young and talented minds determined to
                make a difference in the field of technology.{" "}
              </p>
              <button onClick={() => setStartTour(true)}>
                Start Exploring
              </button>
            </div>
          </>
        )}
         {startTour && (
          <>

            <div className="command">
              <pre>
                <h2>Controls:</h2>
               W,A,S,D(Movement)
               <br />
               Car click(Resets the car)
                
              </pre>
            </div>
          </>
        )}
       
         
      </div>
    </>
  );
}

export default Interface;
