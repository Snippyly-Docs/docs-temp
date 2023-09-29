
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactCursorOverview(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1]],
    2: [[7, 7]],
    3: [[7, 7]]
  };

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Import Cursor Component',
      active: step === 1,
      description: (
        <>
          <strong>Import the component from the React library.</strong>
        </>
      )
    },
    {
      step: 2,
      title: 'Add Cursor Component',
      active: step === 2,
      description: (
        <>
          <strong>Add it to the root component.</strong>
          <p>This component renders the cursors of users on the same <code>document</code> and <code>location</code> in your web app. <br /><br />
          Note that we automatically assign different colors to users & <b>adapt the cursors to different screen sizes and to what's actually present on the screen.</b> So you don't have to worry about building this logic.
          </p>
        </>
      )
    },
    {
      step: 3,
      title: 'Test Integration',
      active: step === 3,
      description: (
        <>
          <strong>Test it out by opening the target page in two browsers with two different users logged in.</strong>
          <p>You should see the cursors of the users rendered as you move mouse around.</p>
        </>
      )
    }
  ];

  const code = `
import { VeltProvider, VeltCursor } from '@veltdev/react';

export default function App() {

  return (
    <VeltProvider apiKey="API_KEY">
      <VeltCursor />
      {/* ... */}
    </VeltProvider>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}