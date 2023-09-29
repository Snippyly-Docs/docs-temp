
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactPin(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[12, 17]],
    2: [[14, 14]],
    3: [[16, 16]],
  }

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
import { 
  SnippylyProvider, 
  SnippylyComments
} from '@veltdev/react';

export default function App() {

  return (
    <SnippylyProvider apiKey="API_KEY">

      <SnippylyComments>
        <div 
          slot="comment-pin" 
          data-snippyly-priority-color="border-color"
        >
          <img data-snippyly-avatar-img="src" />
        </div>
      </SnippylyComments>

    </SnippylyProvider>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}