
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactPresenceOverview(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1]],
    2: [[7, 7]],
    3: [[7, 7]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Import Presence Component',
      active: step === 1,
      description: (
        <>
          <strong>Import the Presence component from the React library.</strong>
        </>
      )
    },
    {
      step: 2,
      title: 'Add Presence Component',
      active: step === 2,
      description: (
        <>
          <strong>Add it anywhere you want to see the user avatars.</strong>
          <p>This component renders the avatars of users on the same document in your web app.
            We automactically detect when users are active on the document and render their avatars.
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
          <p>You should see the avatars of the users rendered where you added the presence component.</p>
        </>
      )
    }
  ];

  const code = `
import { VeltPresence } from '@veltdev/react';

export default function App() {

  return (
    <div className="toolbar">
      <VeltPresence />
    </div>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}