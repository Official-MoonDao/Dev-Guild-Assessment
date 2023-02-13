import Head from "next/head";
import MainCard from "@/components/Assessment/MainCard";
import TutorialStages from "@/components/Assessment/AssessmentStages";
import { useEffect, useState } from "react";

export default function Tutorial() {
  const [memberProgress, setMemberProgress]: any = useState(null);
  //check local storage for progress
  useEffect(() => {
    (async () => {
      let localData: any = localStorage.getItem("Tutorial");
      if (localData) {
        localData = await JSON.parse(localData);
        await setMemberProgress(localData?.progress);
      } else await setMemberProgress(0);
    })();
  }, []);
  return (
    <>
      <Head>
        <title>MoonDAO Dev Guild Assessment</title>
        <meta
          name="description"
          content="A tutorial for new members of the MoonDAO Dev Guild"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pgContain stars-bg">
        <MainCard>
          {memberProgress !== null && (
            <TutorialStages progress={memberProgress} />
          )}
        </MainCard>
      </div>
    </>
  );
}
