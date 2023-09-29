
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactTextOverview(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1]],
    2: [[8, 8]],
    3: [[8, 8]]
  };

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Import Comment components',
      active: step === 1,
      description: (
        <>
          <strong>Import the <code>VeltComments</code> component.</strong>
        </>
      )
    },
    {
      step: 2,
      title: 'Add Comment component with Text mode',
      active: step === 2,
      description: (
        <>
          <strong>Add the <code>VeltComments</code> component to the root of your app and mark the <code>textMode</code> property as <code>true</code>.</strong>
          <p>This component is required to render comments in your app. <br /> <br />
            Text mode allows users to select any text and attach comments to it similar to Google Docs.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Test Integration',
      active: step === 3,
      description: (
        <>
          <strong>Test it out by opening the page with Velt components in your browser.</strong>
          <p>Select any text, a comment tool will appear near the highlighted text. Click on it to add a comment.</p>
        </>
      )
    }
  ];

  const code = `
import { VeltProvider, VeltComments } from '@veltdev/react';

export default function App() {

  return (
    <VeltProvider apiKey="API_KEY">

      <VeltComments textMode={true} />

    </VeltProvider>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}