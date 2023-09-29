
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactTool(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[11, 13]],
  }

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Replace the Sidebar Button',
      active: step === 1,
      description: (
        <>
          <strong>Provide a template for the sidebar button.</strong>
          <p>Target the <code>button</code> slot with your own custom template.</p>
        </>
      )
    }
  ];

  const code = `
import {
  SnippylySidebarButton
} from '@veltdev/react';

export default function App() {

  return (
    <>

      <SnippylySidebarButton>
        <div class="sidebar-button">
          <img src="..." />
        </div>
      </SnippylySidebarButton>

    </>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}