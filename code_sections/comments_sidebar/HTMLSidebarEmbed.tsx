import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function HTMLSidebarEmbed(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[9, 9]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Embed the Sidebar in a component',
      active: step === 1,
      description: (
        <>
          <strong>You can customize the location of the sidebar.</strong>
          <p>By default, the sidebar will open up from the right corner of the page. Instead with embed mode, you can move the sidebar anywhere and it will take up the full width and height of its container.</p>
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

    <div class="sidebar-container">
      <snippyly-comments-sidebar embed-mode="true"></snippyly-comments-sidebar>
    </div>
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}