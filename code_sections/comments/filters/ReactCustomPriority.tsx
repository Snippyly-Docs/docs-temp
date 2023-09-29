import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactCustomPriority(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[12, 29]],
    2: [[16, 17]]
  };

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Define custom priorities',
      active: step === 1,
      description: (
        <>
          <strong>Pass custom priorities in the <code>setCustomPriorities</code> method of the comment element.</strong>
          <p>We will replace our custom priority assignments and filtering functionality to use the values you pass in.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Set the colors for each priority',
      active: step === 2,
      description: (
        <>
          <p>The <code>color</code> field determines the icon color.</p>
          <p>The <code>lightColor</code> field determines the background color of the filter.</p>
        </>
      )
    }
  ];

  const code = `
import { 
  SnippylyProvider, 
  SnippylyComments
} from '@veltdev/react';

export default function App() {

  return (
    <SnippylyProvider apiKey="API_KEY">
      <SnippylyComments 

        customPriorities={[
        {
          "id": "low",
          "name": "Low",
          "color": "red",
          "lightColor": "pink",
        },
        {
          "id": "medium",
          "name": "Medium"
          ...
        },
        {
          "id": "high",
          "name": "High"
          ...
        }
      ]}
      
      />
    </SnippylyProvider>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}