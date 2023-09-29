import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function HTMLHuddleOverview(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[9, 9]],
    2: [[9, 9]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Add Huddle Component',
      active: step === 1,
      description: (
        <>
          <strong>Add it to your root component.</strong>
          <p>This renders the video or audio bubbles in the given huddle.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Add Huddle Tool',
      active: step === 2,
      description: (
        <>
          <strong>Add it wherever you want to show the button.</strong>
          <p>This adds the button to start a huddle.</p>
        </>
      )
    }
  ];

  const code = `
<!doctype html>
<html lang="en">
  <head>
    <title>Presence documentation</title>
  </head>
  <body>

    <div class="toolbar">
      <snippyly-presence></snippyly-presence>
    </div>
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}