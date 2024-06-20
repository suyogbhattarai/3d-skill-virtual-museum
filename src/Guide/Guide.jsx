import React, { useEffect } from 'react'
import { useState } from 'react';
import './guide.css'

function Guide({ isWithinBoundaries,setIsWithinBoundaries,startTour,isWithinSecondPolygon,isWithinThirdPolygon,isWithinFourthPolygon,isWithinFifthPolygon,isWithinSixthPolygon}) {
  const [closeTip6, setCloseTip6] = useState(false);
  const [closeTip5, setCloseTip5] = useState(false);
  const [closeTip4, setCloseTip4] = useState(false);
  const [closeTip3, setCloseTip3] = useState(false);
    const [closeTip2, setCloseTip2] = useState(false);
    const [closeTip1, setCloseTip1] = useState(false);
    useEffect(()=>{
        if(isWithinBoundaries==true){
            setCloseTip1(true)
        }
        
    },[isWithinBoundaries])
  return (
    <>
    <div className="interface-guide">
    {!closeTip6 && (
              <>
                {isWithinSecondPolygon && (
                  <>
                  
                    <div className="tip2">
                      <h2>Well done:</h2>
                     
                      <p>
                      This is a walking piano
                      </p>
                      <br />
                     <b>Click the piano with mouse to play</b>
                     <br />
                     <p>In reality this played using our foot by pressing the actual keys</p>
                  
                      <button onClick={() => setCloseTip6(true)}>Ok</button>
                    </div>
                  </>
                  )}
              
              </>
            )}
          
    {!closeTip5 && (
              <>
                {isWithinFifthPolygon && (
                  <>
                    <div className="tip2">
                      <h2>Guide:</h2>
                      <div style={{display:"flex",gap:"10px"}}>
                      <p>
                      Turn left to explore second project
                      </p>
                      <img style={{width:"100px"}} className='direction' src="./turnleft.png" alt="" />
                      </div>
                      <hr />
                      <div style={{display:"flex",gap:"10px"}}>
                      <p>
                      Go staright to charge your car
                      </p>
                      <img style={{width:"100px"}} className='direction' src="./straight.png" alt="" />
                      </div>
                    
              
                      <button onClick={() => setCloseTip5(true)}>Ok</button>
                    </div>
                  </>
                )}
              </>
            )}
    {!closeTip4 && (
              <>
                {isWithinFourthPolygon && (
                  <>
                   <div class="tip2">
  <h2>Charging:</h2>
  <div class="fuel-gauge">
    <div class="fuel-level"></div>
  </div>
  <p>
    Wait for the bar to be full for charging your car to full
    </p>
    <br />

  <button onClick={()=>(setCloseTip4(true))}>Ok</button>
  </div>
</>
                )}
              </>
            )}
    {!closeTip3 && (
              <>
                {isWithinThirdPolygon && (
                  <>
                    <div className="tip2">
                      <h2>Guide:</h2>
                      <p>
                      You are now heading towards charging station make sure you enter charging station to charge the car
                      </p>
                      <button onClick={() => setCloseTip3(true)}>Ok</button>
                    </div>
                  </>
                )}
              </>
            )}
    {!closeTip2 && (
              <>
                {isWithinBoundaries && (
                  <>
                    <div className="tip2">
                      <h2>Good Job:</h2>
                      <p>
                        Seems like you have reached our first project.Let me explain you about the project this is a crab robot this robot can dance and move like an actual crab with commands.
                      </p>
                      <button onClick={() => setCloseTip2(true)}>Ok</button>
                    </div>
                  </>
                )}
              </>
            )}
     {startTour && (
          <>
            {isWithinSixthPolygon && !closeTip1 && (
              <>
                <div className="tip1">
                  <h2>Guide:</h2>
                  <div style={{display:"flex",gap:"20px"}}>
                  <p>Go straight and turn right to explore the first project</p>
                  <img className='direction' src="./turnright.png" alt="" />
                  </div>
                  <br />
                  <button onClick={() => setCloseTip1(true) }>Ok</button>
                </div>
              </>
            )}
           
          

          
          </>
        )}
    </div>
    
    </>
  )
}

export default Guide