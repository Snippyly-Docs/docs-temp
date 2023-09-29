import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function HTMLCursorCustom(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[9, 9]],
    2: [[10, 10]],
    3: [[11, 11]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Enable avatar mode',
      active: step === 1,
      description: (
        <>
          <strong>Show the user's avatar floating next to their cursor.</strong>
          <p>Enabling this mode will allow you to show the user's avatar in context with the cursor.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Set inactivity time',
      active: step === 2,
      description: (
        <>
          <strong>Set the time it takes for a cursor to disappear.</strong>
          <p>If a user leaves their mouse cursor, set the time it takes for that cursor to disappear on everyone else's screen. If they unfocus the tab, they will immediately go inactive.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Set allowed element IDs',
      active: step === 3,
      description: (
        <>
          <strong>Whitelist allowed elements</strong>
          <p>If you provide a list of element IDs, we will only show cursors that hover over those specific elements.</p>
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

    <snippyly-cursor
      avatar-mode="true"
      inactivity-time="300000"
      allowed-element-ids='["element-1", "element-2"]'
    ></snippyly-cursor>
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}