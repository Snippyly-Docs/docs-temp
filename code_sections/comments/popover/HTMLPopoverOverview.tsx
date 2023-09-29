import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function HTMLPopoverOverview(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[8, 8]],
    2: [[11, 13]],
    3: [[17, 19]],
    4: [[17, 19]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Add Comment component with Popover mode',
      active: step === 1,
      description: (
        <>
          <strong>Add the comment component to your template.</strong>
          <p>This component is required to render comments in your app. Popover mode means that comments can be attached to specific target elements.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Add the Comment Tool component',
      active: step === 2,
      description: (
        <>
          <strong>The comment tool allows you to add comments.</strong>
          <p>When you click on the comment tool, it initiates comment mode. In Popover mode, you must specify a target comment element ID which links the tool to that element.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Add the Comment Bubble component',
      active: step === 3,
      description: (
        <>
          <strong>The comment bubble shows the total number of threads, and allows users to open the comment associated with a given target element.</strong>
          <p>It acts as an indicator -- your users can see how many comments were left on an element at first glance. Like the Comment Tool, you must specify a target comment element ID.</p>
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
          <p>You should be able to leave a comment on the target element using the comment tool.</p>
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

    <snippyly-comments popover-mode="true"></snippyly-comments>

    <div class="toolbar">
      <snippyly-comment-tool 
        target-comment-element-id="some-element"
      ></snippyly-comment-tool>
    </div>

    <div id="some-element">
      <snippyly-comment-bubble 
        target-comment-element-id="some-element"
      ></snippyly-comment-bubble>
      Attach a comment to this div!
    </div>
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}