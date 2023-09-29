import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function HTMLFlockOverview(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[10, 18]],
    2: [[25, 25]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Pass in a callback for navigation',
      active: step === 1,
      description: (
        <>
          <strong>Use a callback for custom navigation or side-effects.</strong>
          <p>When the leader of a flock navigates, this callback will be called.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Disable default flock navigation',
      active: step === 2,
      description: (
        <>
          <strong>Disable default flock navigation.</strong>
          <p>If you are handling navigation using a callback, you can opt to disable our default navigation using <code>window.location.href</code>.</p>
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

      function onNavigateHandler(pageInfo) {
        // Do something with pageInfo
      }

      const presenceDOMElement = document.querySelector('snippyly-presence');

      if (presenceDOMElement) {
        presenceDOMElement.addEventListener('navigate', onNavigateHandler);
      }

    </script>

    <div class="toolbar">
      <snippyly-presence
        flock-mode="true"
        disable-flock-navigation="true"
      ></snippyly-presence>
    </div>
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}