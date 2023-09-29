
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';
import { createGetSnippylyStep, createUseEffectStep } from '../CommonSteps';

export default function ReactGetComments(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1], [6, 6]],
    2: [[2, 2], [8, 9], [11, 11], [24, 25]],
    3: [[13, 18]],
    4: [[20, 22]]
  };

  const [step, setStep] = useState(1);

  const steps = [
    createGetSnippylyStep(step, 1),
    createUseEffectStep(step, 2),
    {
      step: 3,
      title: 'Filter comments by document id and location (optional)',
      active: step === 3,
      description: (
        <>
          <strong>You can fetch the comments that correspond to a document and location.</strong>
          <p>You can pass a document in by itself or with a corresponding location. We will send back an <code>Observable</code> which will listen to comment changes for that document and location.</p>
        </>
      )
    },
    {
      step: 4,
      title: 'Subscribe to comments',
      active: step === 4,
      description: (
        <>
          <strong>Subscribe to constant comment changes.</strong>
          <p>We will send you a new list of comments everytime there is a change so you can build out your own user UI and logic. You can pass in a <code>documentId</code> and <code>location</code> to filter out unwanted comments.</p>
        </>
      )
    }
  ];

  const code = `
import { SnippylyComments, useVeltClient } from '@veltdev/react';
import { useEffect } from 'react';

export default function App() {

  const { client } = useVeltClient();

  useEffect(() => {
    if (client) {

      const commentElement = client.getCommentElement();

      // Provide your own logic to determine the documentId and location
      const documentId = 'example-document-id';

      const location = {
        page: 'example-page'
      };

      commentElement.getAllCommentAnnotations(documentId, location).subscribe((comments) => {
        // Do something with comments list
      });

    }
  }, [client]);

  return (
    <>
      <SnippylyComments />
      {/* ... */}
    </>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}