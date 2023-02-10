/*
⚠ WARNING ⚠ 
DO NOT CHANGE THIS FILE BEFORE YOU'VE FINISHED THE TUTORIAL, 
IT WILL COUNT AGAINST YOUR FINAL ASSESMENT
*/

import { useEffect, useState } from "react";
import AdvanceButton from "./AdvanceButton";
import CustomComponent from "./CustomComponent";

export default function TutorialStages({ progress }: any) {
  const [currentStage, setCurrentStage]: any = useState(progress);

  useEffect(() => {
    if (currentStage) {
      window.localStorage.setItem(
        "Tutorial",
        JSON.stringify({ progress: currentStage })
      );
    }
    console.log(currentStage);
  }, [currentStage]);

  //Dynamic Stage Container
  function StageContainer({ children }: any) {
    return (
      <div
        className={`flex flex-col justify-center items-center p-4 ${
          currentStage > 0 && "w-[90vw]"
        }`}
      >
        {children}
      </div>
    );
  }

  return (
    <StageContainer>
      {currentStage === 0 && (
        <>
          <h1>Dev Guild Tutorial</h1>
        </>
      )}
      {currentStage === 1 && (
        <>
          <h1>Stage 1: Create your own component</h1>
          <p>{`First find the 'components' folder in the project. Click the drop down and open the 'CustomComponent.tsx' file`}</p>
          <p>{`Create a component with a button that links to the main MoonDAO website. Use tailwindcss or the css classes provided in the 'global.css' file for styling.  Use this link for your button => https://moondao.com`}</p>
          {CustomComponent && <CustomComponent />}
        </>
      )}
      {currentStage === 2 && <h1>Stage 2</h1>}
      {currentStage === 3 && <h1>Stage 3</h1>}
      <AdvanceButton
        setStage={(stage: number) => setCurrentStage(stage)}
        currentStage={currentStage}
      />
    </StageContainer>
  );
}

/*
Tutorial Stages:

0) Start
1) Create a custom component to link to MoonDAO website


*/

/*
⚠ WARNING ⚠ 
DO NOT CHANGE THIS FILE BEFORE YOU'VE FINISHED THE TUTORIAL, 
IT WILL COUNT AGAINST YOUR FINAL ASSESMENT
*/
