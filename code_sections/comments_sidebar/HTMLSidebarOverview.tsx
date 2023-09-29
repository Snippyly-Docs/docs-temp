import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function HTMLFreestyleOverview(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[9, 9]],
    2: [[13, 13]],
    3: [[13, 13]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Add Comments Sidebar component',
      active: step === 1,
      description: (
        <>
          <strong>Add the comment component to the root of your app.</strong>
          <p>This component is required to render comments in your app.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Add Sidebar button',
      active: step === 2,
      description: (
        <>
          <strong>Add the Sidebar button to toggle the sidebar.</strong>
          <p>This is completely optional and you can toggle the sidebar in the comment dialog as well.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Test Integration',
      active: step === 3,
      description: (
        <>
          <strong>Test it out by opening the sidebar.</strong>
          <p>You should be able to click the <code>All comments</code> link in a comment dialog box on the bottom.</p>
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

    <snippyly-comments></snippyly-comments>
    <snippyly-comments-sidebar></snippyly-comments-sidebar>

    <div class="toolbar">
      <snippyly-comment-tool></snippyly-comment-tool>
      <snippyly-sidebar-button></snippyly-sidebar-button>
    </div>
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}