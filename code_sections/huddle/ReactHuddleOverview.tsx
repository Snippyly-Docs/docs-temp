
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactHuddleOverview(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1]],
    2: [[6, 6]],
    3: [[9, 9]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Import Huddle Component',
      active: step === 1,
      description: (
        <>
          <strong>Import the Huddle component from the React library.</strong>
        </>
      )
    },
    {
      step: 2,
      title: 'Add Huddle Component',
      active: step === 2,
      description: (
        <>
          <strong>Add the <code>VeltHuddle</code> component to the root of your app.</strong>
          <p>This component is required to render huddle UI components & huddle users in your app.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Add Huddle Tool Component',
      active: step === 3,
      description: (
        <>
          <strong>Add the <code>VeltHuddleTool</code> component wherever you want to show the huddle tool button.</strong>
          <p>Clicking on it initiates a huddle.
          </p>
        </>
      )
    }
  ];

  const code = `
import { VeltHuddle, VeltHuddleTool} from '@veltdev/react';

export default function App() {

  return (
    <VeltHuddle />

    <div className="toolbar">
      <VeltHuddleTool type='all' />
    </div>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}