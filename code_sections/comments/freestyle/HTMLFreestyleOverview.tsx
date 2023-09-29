import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function HTMLFreestyleOverview(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[8, 8]],
    2: [[11, 11]],
    3: [[11, 11]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Add Comment component',
      active: step === 1,
      description: (
        <>
          <strong>Add the comment component to your template.</strong>
          <p>This component is required to render comments in your app.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Add the Comment tool component',
      active: step === 2,
      description: (
        <>
          <strong>The comment tool allows you to add comments.</strong>
          <p>When you click on the comment tool, it initiates comment mode. In Freestyle mode, you can attach comments to any elements on the page.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Test Integration',
      active: step === 3,
      description: (
        <>
          <strong>Test it out by adding a comment.</strong>
          <p>You should be able to leave comments using the comment tool.</p>
        </>
      )
    }
  ];

  const code = `
<!doctype html>
<html lang="en">
  <head>
    <title>Comment documentation</title>
  </head>
  <body>

    <snippyly-comments></snippyly-comments>

    <div class="toolbar">
      <snippyly-comment-tool></snippyly-comment-tool>
    </div>
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}