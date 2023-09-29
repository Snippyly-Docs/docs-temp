
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function HTMLSidebarButton(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[9, 11]]
  };
  
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
<!doctype html>
<html lang="en">
  <head>
    <title>Comment Sidebar documentation</title>
  </head>
  <body>

    <snippyly-sidebar-button>
        <div class="sidebar-button">
          <img src="..." />
        </div>
    </snippyly-sidebar-button>

  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}