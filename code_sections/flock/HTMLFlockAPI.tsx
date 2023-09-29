import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';
import { createGetInstanceStep } from '../CommonSteps';

export default function ReactFlockAPI(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[11, 11]],
    2: [[13, 14]],
    3: [[16, 17]]
  };

  const [step, setStep] = useState(1);

  const steps = [
    createGetInstanceStep(step, 1, 'presence'),
    {
      step: 2,
      title: 'Start following a user',
      active: step === 2,
      description: (
        <>
          <strong>Start following a user by passing in their user ID.</strong>
          <p>You can programatically start a flock session by passing in the user ID of the user leading the session.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Stop following',
      active: step === 3,
      description: (
        <>
          <strong>Stop following.</strong>
          <p>If the current user is in a flock session, they will be removed from that session. If there are no more followers in the session, the session will be destroyed.</p>
        </>
      )
    }
  ];

  const code = `
<!doctype html>
<html lang="en">
  <head>
    <title>Flock mode documentation</title>
  </head>
  <body>

    <script>
      if (window.Velt) {

        const presenceElement = window.Velt.getPresenceElement();

        // Pass in the user ID of the user you want to follow
        presenceElement.startFollowingUser(userId);

        // Stop following the user
        presenceElement.stopFollowingUser();

      }
    </script>

    <div class="toolbar">
      <snippyly-presence
        flock-mode="true"
      ></snippyly-presence>
    </div>
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}