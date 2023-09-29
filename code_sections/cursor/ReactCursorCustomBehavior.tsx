import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactCursorCustomBehavior(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[8, 8]],
    2: [[9, 9]],
    3: [[10, 10]],
    4: [[11, 11]],
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Enable avatar mode',
      active: step === 1,
      description: (
        <>
          <strong>Show the user's avatar floating next to their cursor instead of their name.</strong>
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
          <strong>Set the time it takes for a user to go inactive in milliseconds.</strong>
          <p>By default we mark a user as inactive if they do not take any action on the document within a 5 mins timeframe. <br />
            If they unfocus the tab, we mark them inactive immediately.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Set allowed element IDs',
      active: step === 3,
      description: (
        <>
          <strong>Provide a list of element IDs where the cursors should show.</strong>
          <p>If you provide a list of element IDs, we will only show cursors that hover over those specific elements. <br /> <br />
            For eg: For an app with canvas and tool picker: You can whitelist the canvas ID so that the cursors are only visible on the canvas and not the tool picker.
          </p>
        </>
      )
    },
    {
      step: 4,
      title: 'Subscribe to changes in User Cursors',
      active: step === 4,
      description: (
        <>
          <p>Whenever the cursor for any user changes, we emit this event with the updated list of users currently online on this <code>document</code> with their cursor positions.
          </p>
        </>
      )
    }
  ];

  const code = `
import { VeltProvider, VeltCursor } from '@veltdev/react';

export default function App() {

  return (
    <VeltProvider apiKey="API_KEY">
      <VeltCursor
        avatarMode={true}
        inactivityTime={300000}
        allowedElementIds={['element-1', 'element-2']}
        onCursorUserChange={(cursorUsers) => yourMethod(cursorUsers)}
      />
    </VeltProvider>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}