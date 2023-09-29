import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';
import { createUseEffectStep, createGetSnippylyStep } from '../CommonSteps';

export default function ReactFlockAPI(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[1, 1], [6, 6]],
    2: [[2, 2], [8, 9], [19, 20]],
    3: [[11, 11], [13, 14]],
    4: [[11, 11], [16, 17]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    createGetSnippylyStep(step, 1),
    createUseEffectStep(step, 2),
    {
      step: 3,
      title: 'Start following a user',
      active: step === 3,
      description: (
        <>
          <strong>Start following a user by passing in their user ID.</strong>
          <p>You can programatically start a flock session by passing in the user ID of the user you want to lead the session.</p>
        </>
      )
    },

    {
      step: 4,
      title: 'Stop following',
      active: step === 4,
      description: (
        <>
          <strong>Stop flock session for the current user.</strong>
          <p>If the current user is in a flock session, they will be removed from that session. If there are no more followers in the session, the session will be destroyed.</p>
        </>
      )
    }
  ];

  const code = `
import { VeltPresence, useVeltClient } from '@veltdev/react';
import { useEffect } from 'react';

export default function App() {

  const { client } = useVeltClient();

  useEffect(() => {
    if (client) {

      const presenceElement = client.getPresenceElement();

      // Pass in the user ID of the user you want to follow
      presenceElement.startFollowingUser(userId);

      // Stop following the user
      presenceElement.stopFollowingUser();

    }
  }, [client]);

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