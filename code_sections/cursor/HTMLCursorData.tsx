import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';
import { createGetInstanceStep } from '../CommonSteps';

export default function HTMLCursorData(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[14, 14]],
    2: [[16, 18]]
  };

  const [step, setStep] = useState(1);

  const steps = [
    createGetInstanceStep(step, 1, 'cursor'),
    {
      step: 2,
      title: 'Subscribe to live cursors',
      active: step === 2,
      description: (
        <>
          <strong>Subscribe to constant cursor changes.</strong>
          <p>We will send you a new list of cursors everytime there is a change so you can build out your own cursor UI and logic.</p>
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

    <script>

      if (window.Velt) {

        const cursorElement = window.Velt.getCursorElement();

        cursorElement.getLiveCursorsOnDocument().subscribe((cursors) => {
          // Do something with cursors list
        });

      }

    </script>
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}