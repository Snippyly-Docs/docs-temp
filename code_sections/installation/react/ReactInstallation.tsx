import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';
import CodeSnippet from '../../../components/CodeSnippet/CodeSnippet';

export default function ReactInstallation(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[1, 1]],
    2: [[1, 1]],
    3: [[6, 8]]
  };

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Install React package',
      active: step === 1,
      description: (
        <>
          <CodeSnippet>
            $ npm install @veltdev/react
          </CodeSnippet>
        </>
      )
    },
    {
      step: 2,
      title: 'Install types (optional)',
      active: step === 2,
      description: (
        <>
          <strong>If you're using TypeScript, you can install the types package.</strong>
          <CodeSnippet>
            $ npm install --save-dev @snippyly/types
          </CodeSnippet>
        </>
      )
    },
    {
      step: 3,
      title: 'Add VeltProvider',
      active: step === 3,
      description: (
        <>
          <strong>Add the VeltProvider component to the root of your app.</strong>
          <p>Add your Velt API key.</p>
        </>
      )
    },
  ];

  const code = `
import { VeltProvider } from '@veltdev/react';

export default function App() {

  return (
    <VeltProvider apiKey="YOUR_API_KEY">
      // Your app goes here
    </VeltProvider>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}