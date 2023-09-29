import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';
import { createGetSnippylyStep, createUseEffectStep } from '../../CommonSteps';

export default function ReactDocument(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[1, 1], [6, 6]],
    2: [[8, 9], [12, 12]],
    3: [[10, 10]],
  };

  const [step, setStep] = useState(1);

  const steps = [
    createGetSnippylyStep(step, 1),
    createUseEffectStep(step, 2),
    {
      step: 3,
      title: 'Set a document ID',
      active: step === 3,
      description: (
        <>
          <strong>Pass a unique ID representing your document. Whenever your document initializes, you should call this method. The SDK will not work without this call.</strong>
          <p>Users logged into the same document ID can see each other's presence, cursors, comments etc. <br />
          </p>
        </>
      )
    },
  ];

  const code = `
import { useVeltClient } from '@veltdev/react';
import { useEffect, useState } from 'react';

export default function Collaboration() {

  const { client } = useVeltClient();

  useEffect(() => {
    if (client) {
      client.setDocumentID('unique-document-id');
    }
  }, [client]);

  return (
    // Your app template
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}