
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactAllCustom(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[9, 11]]
  };
  
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
<!doctype html>
<html lang="en">
  <head>
    <title>Comment documentation</title>
  </head>
  <body>

    <snippyly-comment-tool>
        <div slot="button">
          <img src="..." />
        </div>
    </snippyly-comment-tool>

  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}