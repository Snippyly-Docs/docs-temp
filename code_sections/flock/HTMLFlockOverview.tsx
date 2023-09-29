import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function HTMLFlockOverview(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[9, 11]],
    2: [[10, 10]],
    3: [[10, 10]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Add Presence Component',
      active: step === 1,
      description: (
        <>
          <strong>This features relies on Presence.</strong>
          <p>Once you finish the steps, you can initialize a flock session by clicking on a user's avatar, to begin following that user.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Enable Flock mode',
      active: step === 2,
      description: (
        <>
          <strong>Opt-in to Flock mode globally.</strong>
          <p>This will enable Flock mode as an option for your users globally, wherever Presence is shown.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Test Integration',
      active: step === 3,
      description: (
        <>
          <strong>Test it out by opening the same page in another browser.</strong>
          <p>When you open the same page in another incognito window or browser, you'll be able to test it out by clicking on a user avatar in Presence.</p>
        </>
      )
    }
  ];

  const code = `
<!doctype html>
<html lang="en">
  <head>
    <title>Flock mode documentation</title>
  </head>
  <body>

    <div class="toolbar">
      <snippyly-presence 
        flock-mode="true"
      ></snippyly-presence>
    </div>
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}