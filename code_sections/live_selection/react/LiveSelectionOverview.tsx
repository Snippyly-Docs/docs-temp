
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';
import { createGetSnippylyStep, createUseEffectStep } from '../../CommonSteps';

export default function LiveSelectionOverview(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1], [6,6]],
    2: [[8, 8], [13, 13]],
    3: [[10, 11]]
  };

  const [step, setStep] = useState(1);

  const steps = [
    createGetSnippylyStep(step, 1),
    {
      step: 2,
      title: 'Create a useEffect hook',
      active: step === 2,
      description: (
        <>
          <strong>Create the hook with the <code>client</code> as dependency.</strong>
          {/* <p>Make sure to check that the <code>client</code> and user objects are not <code>null</code> or <code>undefined</code> before you use it.</p> */}
        </>
      )
    },
    {
      step: 3,
      title: 'Enable live selection',
      active: step === 3,
      description: (
        <>
          By default Users will be able to see the live selection from other users on Text nodes, Input tags & Contenteditable DIVs.
          To enable live selection on other HTML elements, add <code>data-live-selection-enabled="true"</code> attribute to it.
          {/* <p>Pass the Velt object you created above in the <code>identify()</code> method.</p> */}
        </>
      )
    },
  ];

  const code = `
import { useVeltClient } from '@veltdev/react';
import { useEffect } from 'react';

export default function App() {

  const { client } = useVeltClient();

  useEffect(() => {
    if (client) {
      const selectionElement = client.getSelectionElement();
      selectionElement.enableLiveSelection();
    }
  }, [client]);

  return (
    //... rest of the component code...
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}