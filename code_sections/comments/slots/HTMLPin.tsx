
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactAllCustom(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[9, 14]],
    2: [[11, 11]],
    3: [[13, 13]],
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Replace the Comment Pin',
      active: step === 1,
      description: (
        <>
          <strong>Provide a template for the Comment Pin.</strong>
          <p>Target the <code>comment-pin</code> slot in order to replace comment pins on the screen.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Bind data to the element style',
      active: step === 2,
      description: (
        <>
          <strong>Use data attributes to bind information like the comment status or priority color.</strong>
          <p>Set the style property target as the value of the data attribute. If you don't provide one, we'll make our best guess.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Bind data to an element attribute',
      active: step === 3,
      description: (
        <>
          <strong>Use data attributes to bind information like the user's avatar <code>src</code>, the comment thread length, etc.</strong>
          <p>Set the attribute target as the value of the data attribute. If you don't provide one, we'll make our best guess.</p>
        </>
      )
    },
  ];

  const code = `
<!doctype html>
<html lang="en">
  <head>
    <title>Comment documentation</title>
  </head>
  <body>

    <snippyly-comments>
      <div 
        slot="comment-pin" 
        data-snippyly-priority-color="border-color"
      >
        <img data-snippyly-avatar-img="src" />
      </div>
    </snippyly-comments>

  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}