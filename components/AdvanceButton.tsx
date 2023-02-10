/*
⚠ WARNING ⚠ 
DO NOT CHANGE THIS FILE BEFORE YOU'VE FINISHED THE TUTORIAL, 
IT WILL COUNT AGAINST YOUR FINAL ASSESMENT
*/

export default function AdvanceButton({ setStage, currentStage }: any) {
  return (
    <button
      className="text-[lightgreen] text-[3vw] hover:scale-[1.25] ease-in-ease-out duration-500"
      onClick={() => {
        //set conditional checks for different stages of tutorial
        setStage(currentStage + 1);
      }}
    >
      {currentStage === 0 ? "Start" : "Next"}
    </button>
  );
}
