import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/index.css";


function MainPage() {
    
    return (
      <>
        <Header />
        <div className="mainPageRender">
          <div className="mainPageRender">

            <div className="alienBox">
              <AlienPlant
                stage={alienPlantPhase}
                setAlienPlantPhase={setAlienPlantPhase}
                alienPlantPhase={alienPlantPhase}
              />
              {/* <button id="mainButton" onClick={() => {setAlienPlantPhase(alienPlantPhase + 1)}}>Increase</button> */}
              <AlienActionButtons />
            </div>
            <div className="humanBox">
              <HumanPlant
                stage={humanPlantPhase}
                setHumanPlantPhase={setHumanPlantPhase}
                humanPlantPhase={humanPlantPhase}
              />
              {/* <button id="mainButton" onClick={() => {setHumanPlantPhase(humanPlantPhase + 1)}}>Increase</button> */}
              <HumanActionButtons />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  
  
  
  export default MainPage;