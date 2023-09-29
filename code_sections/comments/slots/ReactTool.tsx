
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactTool(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[11, 13]],
  }

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Replace the Comment Tool',
      active: step === 1,
      description: (
        <>
          <strong>Provide a template for the Comment Tool.</strong>
          <p>Target the <code>button</code> slot with your own custom template.</p>
        </>
      )
    }
  ];

  const code = `
import {
  SnippylyCommentTool
} from '@veltdev/react';

export default function App() {

  return (
    <>

      <SnippylyCommentTool>
        <div slot="button">
          <img src="..." />
        </div>
      </SnippylyCommentTool>

    </>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}