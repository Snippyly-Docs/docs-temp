
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactPin(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[11, 16]],
    2: [[13, 13]],
    3: [[15, 15]],
  }

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Replace the Comment Bubble',
      active: step === 1,
      description: (
        <>
          <strong>Provide a template for the Comment Bubble.</strong>
          <p>Target the <code>comment-bubble</code> slot with your own custom template.</p>
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
import {
  SnippylyCommentBubble
} from '@veltdev/react';

export default function App() {

  return (
    <>

      <SnippylyCommentBubble>
        <div 
          slot="bubble" 
          data-snippyly-priority-color="border-color"
        >
          <img data-snippyly-avatar-img="src" />
        </div>
      </SnippylyCommentBubble>

    </>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}