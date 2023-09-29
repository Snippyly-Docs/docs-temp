import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function HTMLHuddleCustom(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[10, 10]],
    2: [[11, 11]],
    3: [[12, 12]],
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Set inactivity time',
      active: step === 1,
      description: (
        <>
          <strong>Set the time it takes for a user to go inactive.</strong>
          <p>By default a user will go inactive after 5 minutes. If they unfocus the tab, then they will immediately go inactive.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Add Presence to child documents',
      active: step === 2,
      description: (
        <>
          <strong>Show users' presence on child documents.</strong>
          <p>Set the location attribute on the Presence element. When there are users at that location, their avatars will show in this Presence element.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Set max users',
      active: step === 3,
      description: (
        <>
          <strong>Max users determines how many Presence avatars to display at a time.</strong>
          <p>You can set this via the max-users attribute. Any extra avatars will be hidden and shown in an avatar which indicates the number of extra users.</p>
        </>
      )
    },
  ];

  const code = `
<!doctype html>
<html lang="en">
  <head>
    <title>Presence documentation</title>
  </head>
  <body>

    <div class="toolbar">
      <snippyly-presence
        inactivity-time='30000'
        location='{"page": 1}'
        max-users='3'
      ></snippyly-presence>
    </div>
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}