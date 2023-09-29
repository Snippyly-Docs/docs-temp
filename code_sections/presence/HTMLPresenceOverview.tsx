import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function HTMLPresenceOverview(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[9, 9]],
    2: [[9, 9]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Add Presence Component',
      active: step === 1,
      description: (
        <>
          <strong>Add it anywhere you want to see the user avatars.</strong>
          <p>This component renders the avatars of users on the same page in your web app.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Test Integration',
      active: step === 2,
      description: (
        <>
          <strong>Test it out by opening the same page in another browser.</strong>
          <p>When you open the same page in another incognito window or browser, you should see the avatars of both users.</p>
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