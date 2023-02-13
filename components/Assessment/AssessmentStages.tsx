/*
⚠ WARNING ⚠ 
DO NOT CHANGE THIS FILE BEFORE YOU'VE FINISHED THE TUTORIAL, 
IT WILL COUNT AGAINST YOUR FINAL ASSESMENT
*/

import { useEffect, useState } from "react";
import AdvanceButton from "./AdvanceButton";
import Stage1 from "../CustomComponents/Stage1";
import Stage2 from "../CustomComponents/Stage2";
import bio from "../../BIO.md";
import Link from "next/link";

export default function TutorialStages({ progress }: any) {
  const [currentStage, setCurrentStage]: any = useState(progress);
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    //track progress w/ local storage
    if (currentStage) {
      localStorage.setItem(
        "Tutorial",
        JSON.stringify({ progress: currentStage })
      );
    }
    //verify stage completion
    if (
      (currentStage === 1 && !Stage1()) ||
      (currentStage === 2 && !Stage2()) ||
      (currentStage === 3 && !bio)
    )
      setEnabled(false);
    else setEnabled(true);
  }, [currentStage, Stage1, Stage2, localStorage]);

  //Dynamic Stage Container
  function StageContainer({ children }: any) {
    return (
      <div
        className={`flex flex-col justify-center items-center p-4 w-3/4 gap-4`}
      >
        {children}
      </div>
    );
  }

  //Dynamic instructions
  function Instructions({ text }: any) {
    return (
      <>
        {enabled ? (
          <p className="text-[orange] w-full">{text}</p>
        ) : (
          <p className="text-[grey] w-full">{text}</p>
        )}
      </>
    );
  }

  return (
    <StageContainer>
      {currentStage === 0 && (
        <>
          <h1>Dev Guild Assesment</h1>
          <div>
            <p>
              Before you start the assessment make sure to review the
              <span>
                {" "}
                <Link href="https://github.com/Official-MoonDao/Dev-Guild-Tutorial/blob/main/docs/Guide.md">
                  <button className="text-[cyan] hover:scale-[1.05] ease-in-ease-out duration-300">
                    Dev Guild Guide
                  </button>
                </Link>
              </span>
            </p>
          </div>
        </>
      )}
      {currentStage === 1 && (
        <>
          <h1>Stage 1: Create a button</h1>
          <Instructions
            text={`1) Find the 'CustomComponents' folder and open the 'Stage1.tsx' file`}
          />
          <Instructions
            text={`2) Create a react component with a button that links to the main MoonDAO website.  Use this link for your button => https://moondao.com`}
          />
          <Instructions text={`3) Save the file and refresh the page`} />
          {Stage1 && (
            <Stage1 /> //ignore error
          )}
        </>
      )}
      {currentStage === 2 && (
        <>
          <h1>Stage 2: Display vMooney Data</h1>
          <p className="text-[grey] italic">{`To make data more accessible we've created a subgraph using The Graph Protocol.`}</p>
          <Instructions
            text={`1) Find the 'lib' folder and open the 'vmooney-token.ts' file.`}
          />
          <Instructions
            text={`2) Use the 'getHolders' function in the 'vmooney-token.ts' file to fetch data for vMooney holders. This function returns an array.`}
          />
          <Instructions
            text={`3) Find the 'Stage2.tsx' file inside of the 'CustomComponents' folder.`}
          />
          <Instructions
            text={`4) Create a react component displaying data for vMooney or the holders. Use your imagination. It can be something as simple as displaying the number of holders or you can try something more complex like calculating the total amount of locked mooney.`}
          />
          <Instructions text={`5) Save the file and refresh the page`} />
          {Stage2 && (
            <Stage2 /> //ignore error
          )}
        </>
      )}
      {currentStage === 3 && (
        <>
          <h1>Stage 3: Create a README file</h1>
          <Instructions text={`1) Find the 'BIO.md' file.`} />
          <Instructions
            text={`2) Create a bio using markdown in the 'BIO.md' file.`}
          />
          <Instructions text={`3) Save the file`} />
          {bio && <p>{bio}</p>}
        </>
      )}
      {currentStage === 4 && (
        <>
          <h1>Complete!</h1>
          <p>{`Congrats! 🏆🎉 You've completed the assessment!`}</p>
          <Instructions
            text={`1) Click the 'Review' button to go back through the stages and review your work.`}
          />
          <Instructions
            text={`2) Add notes to the custom components you've created.`}
          />
          <Instructions text={`3) Push the project to your remote repo`} />
          <Instructions
            text={`4) Navigate to the original repo you forked this project from in the Offical MoonDAO github and create a pull request. Please label the pull request "Assessment"`}
          />
          <Instructions
            text={`5) (optional) After you've submitted the pull request feel free to improve this assessment and adjust files with the ⚠Warning⚠ label.`}
          />
        </>
      )}

      <div className="my-6">
        {currentStage !== 4 ? (
          <AdvanceButton
            setStage={(stage: number) => setCurrentStage(stage)}
            currentStage={currentStage}
            enabled={enabled}
          />
        ) : (
          <button
            onClick={(e) => {
              localStorage.setItem("Tutorial", JSON.stringify({ progress: 1 }));
              window.location.reload();
            }}
          >
            Review
          </button>
        )}
      </div>
    </StageContainer>
  );
}

/*
Tutorial Stages:

0) Start
1) Create a custom component to link to MoonDAO website
2) Create a custom component displaying info about vMooney
3) Create a README file
4) End/Review


*/

/*
⚠ WARNING ⚠ 
DO NOT CHANGE THIS FILE BEFORE YOU'VE FINISHED THE TUTORIAL, 
IT WILL COUNT AGAINST YOUR FINAL ASSESMENT
*/
