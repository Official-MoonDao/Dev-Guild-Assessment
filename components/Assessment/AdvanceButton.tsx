/*
⚠ WARNING ⚠ 
DO NOT CHANGE THIS FILE BEFORE YOU'VE FINISHED THE TUTORIAL, 
IT WILL COUNT AGAINST YOUR FINAL ASSESMENT
*/

import { useEffect, useState } from "react";
import CustomComponent from "../CustomComponents/Stage1";

export default function AdvanceButton({
  setStage,
  currentStage,
  enabled,
}: any) {
  return (
    <>
      {enabled || currentStage === 0 ? (
        <button
          className={`text-[lightgreen] text-[3vw] hover:scale-[1.15]
     ease-in-ease-out duration-500`}
          onClick={() => {
            //set conditional checks for different stages of tutorial
            if (!enabled) return;
            setStage(currentStage + 1);
          }}
        >
          {currentStage === 0 ? "Start" : "Next"}
        </button>
      ) : (
        <button className={`text-[grey] text-[3vw]`}>Next</button>
      )}
    </>
  );
}

/*
⚠ WARNING ⚠ 
DO NOT CHANGE THIS FILE BEFORE YOU'VE FINISHED THE TUTORIAL, 
IT WILL COUNT AGAINST YOUR FINAL ASSESMENT
*/
