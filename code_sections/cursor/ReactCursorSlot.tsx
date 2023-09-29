import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';
import CursorDemo from '../../components/CursorDemo/CursorDemo';

export default function CursorSlot(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[8, 8]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Add a custom icon for the cursor',
      active: step === 1,
      description: (
        <>
          <strong>You can provide any HTML inside the cursor element.</strong>
          <p>Just provide the correct slot attribute and the cursor icon that we use will be replaced.</p>
        </>
      )
    }
  ];

  const code = `
import { VeltCursor } from '@veltdev/react';

export default function App() {

  return (
    <>
      <VeltCursor>
        <img src="..." slot="cursor" />
      </VeltCursor>

      {/* ... */}
    </>
  );
}
    `;

  return <CodeSection
    preview={
      <CursorDemo replaceCursor={true} />
    }
    sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}