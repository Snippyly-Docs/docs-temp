import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactCustomStatus(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[12, 34]],
    2: [[17, 17], [23, 23], [28, 28]],
    3: [[18, 19]]
  };

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Define custom statuses',
      active: step === 1,
      description: (
        <>
          <strong>Provide custom statuses in the <code>customStatuses</code> prop.</strong>
          <p>We will replace our custom status assignments and filtering functionality to use the values you pass in.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Make sure to set the status type',
      active: step === 2,
      description: (
        <>
          <strong>We depend on you passing in a status type to correctly map custom statuses.</strong>
          <p>The <code>default</code> type will be the default status assigned to each comment.</p>
          <p>The <code>ongoing</code> type is treated as an intermediary status, you can add as many <code>ongoing</code> statuses as you want.</p>
          <p>The <code>terminal</code> type represents a status that is completed, and should no longer be shown by default.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Pass in an icon URL or serialized SVG',
      active: step === 3,
      description: (
        <>
          <strong>We automatically parse and colorize SVGs.</strong>
          <p>If you pass in an icon URL, you will have to colorize each icon yourself to match the status color.</p>
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

        customStatuses={[
        {
          "id": "open",
          "name": "Open",
          "color": "white",
          "type": "default",
          "iconUrl": "...", // Pass in an icon URL
          "svg": "<svg>...</svg>" // Pass in a serialized SVG
        },
        {
          "id": "in-progress",
          "type": "ongoing"
          ...
        },
        {
          "id": "accepted",
          "type": "terminal"
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