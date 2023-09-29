import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactFlockOverview(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[1, 1], [7, 9]],
    2: [[1, 1], [7, 9]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Enable Flock mode on Presence',
      active: step === 1,
      description: (
        <>
          <strong>Enable Flock mode feature.</strong>
          <p>You need to add <code>Presence</code> feature to trigger Flock mode. This will enable Flock mode as an option for your users globally, wherever <code>Presence</code> is shown.</p>
          <br />
          <p>
          To start the shared flock session, click on a user's avatar to start following them.
          </p>
        </>
      )
    },
    {
      step: 2,
      title: 'Test Integration',
      active: step === 2,
      description: (
        <>
          <strong>Test it out by opening the target page in two browsers with two different users logged in.</strong>
          <p>You should see the avatars of the users rendered where you added the presence component. Now click on any avatar to start following them.</p>
        </>
      )
    }
  ];

  const code = `
  import { VeltPresence } from '@veltdev/react';

export default function App() {

  return (
    <div className="toolbar">
      <VeltPresence 
        flockMode={true} 
      />
    </div>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}