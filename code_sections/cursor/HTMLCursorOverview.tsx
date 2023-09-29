import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function HTMLCursorOverview(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[8, 8]],
    2: [[8, 8]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Add Cursor Component',
      active: step === 1,
      description: (
        <>
          <strong>Add it to any page you want to see user cursors.</strong>
          <p>This component renders the cursors of users on the same document and location in your web app.</p>
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
          <p>When you open the same page in another incognito window or browser, you should see the cursor on the other window when moving your mouse around.</p>
        </>
      )
    }
  ];

  const code = `
<!doctype html>
<html lang="en">
  <head>
    <title>Cursors documentation</title>
  </head>
  <body>

    <snippyly-cursor></snippyly-cursor>
    <!-- ... -->
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}