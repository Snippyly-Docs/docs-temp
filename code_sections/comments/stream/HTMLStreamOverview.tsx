import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function HTMLStreamOverview(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[8, 9], [11, 11]],
    2: [[10, 10]],
    3: [[18, 18]],
    4: [[18, 18]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Add Comment component with Stream mode',
      active: step === 1,
      description: (
        <>
          <strong>Add the comment component to your template.</strong>
          <p>This component is required to render comments in your app. Stream mode renders a stream view of comments in a column.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Add the Stream View container ID (optional)',
      active: step === 2,
      description: (
        <>
          <strong>Pass the container ID of the scrolling element to help us position the stream of comments.</strong>
          <p>Alternatively, you can move the Comment component tag to inside whatever scrolling element to help position the comment stream correctly.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Add the Comment Tool component',
      active: step === 3,
      description: (
        <>
          <strong>The comment tool allows you to add comments.</strong>
          <p>When you click on the comment tool, it initiates comment mode.</p>
        </>
      )
    },
    {
      step: 4,
      title: 'Test Integration',
      active: step === 4,
      description: (
        <>
          <strong>Test it out by adding a comment.</strong>
          <p>You should be able to leave a comment and see the comment appear in the comment stream.</p>
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

    <snippyly-comments
      stream-mode="true"
      stream-view-container-id="scrolling-comment-stream"
    ></snippyly-comments>

    <div id="scrolling-comment-stream">
      <!-- This element is scrollable -->
    </div>

    <div class="toolbar">
      <snippyly-comment-tool></snippyly-comment-tool>
    </div>

  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}