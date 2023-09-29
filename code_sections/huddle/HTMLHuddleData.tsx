import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function HTMLHuddleData(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[14, 14]],
    2: [[16, 18]]
  };

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Get an instance of the presence element',
      active: step === 1,
      description: (
        <>
          <strong>Fetch the presence element from the Velt client.</strong>
          <p>At this point, the Velt instance should be loaded and available to you on the <code>window</code> object.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Subscribe to presence users',
      active: step === 2,
      description: (
        <>
          <strong>Subscribe to constant user changes.</strong>
          <p>We will send you a new list of users everytime there is a change so you can build out your own presence UI and logic.</p>
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

    <snippyly-presence></snippyly-presence>

    <script>

      if (window.Velt) {

        const presenceElement = window.Velt.getPresenceElement();

        presenceElement.getOnlineUsersOnCurrentDocument().subscribe((users) => {
          // Do something with users list
        });

      }

    </script>
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}