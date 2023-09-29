import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';
import { createUseEffectStep, createGetSnippylyStep } from '../CommonSteps';

export default function ReactCursorData(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[1, 1], [6, 6]],
    2: [[2, 2], [8, 9], [17, 18]],
    3: [[11, 11], [13, 15]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    createGetSnippylyStep(step, 1),
    createUseEffectStep(step, 2),
    {
      step: 3,
      title: 'Subscribe to live cursors',
      active: step === 3,
      description: (
        <>
          <strong>Subscribe to the realtime Cursor users data on the current <code>document</code> and <code>location</code>.</strong>
          <p>We will send you a new list of cursors everytime there is a change so you can build out your own cursor UI.</p>
        </>
      )
    }
  ];

  const code = `
import { useVeltClient } from '@veltdev/react';
import { useEffect } from 'react';

export default function App() {

  const { client } = useVeltClient();

  useEffect(() => {
    if (client) {

      const cursorElement = client.getCursorElement();

      cursorElement.getOnlineUsersOnCurrentDocument().subscribe((_cursorUsers) => {
        // Do something with Cursor Users list
      });

    }
  }, [client]);

  return (
    <>
    </>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}