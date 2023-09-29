
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactAllCustom(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[8, 10]],
    2: [[12, 14], [17, 17]],
    3: [[18, 18]],
    4: [[19, 19]],
    5: [[20, 20]],
    6: [[21, 21]],
    7: [[22, 22]],
    8: [[23, 23]],
    9: [[24, 24]],
    10: [[25, 25]],
    11: [[26, 26]],
    12: [[27, 27]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Blacklist certain elements',
      active: step === 1,
      description: (
        <>
          <strong>Add a data attribute.</strong>
          <p>If you only want to disallow commenting on certain elements, add the <code>data-snippyly-comment-disabled</code> attribute to that element.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Whitelist certain elements',
      active: step === 2,
      description: (
        <>
          <strong>You can pass allowed element IDs to our Comments component.</strong>
          <p>This does not impact Popover mode. Comments will be disabled for every other element that is not passed in the array.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Enable moderator mode',
      active: step === 3,
      description: (
        <>
          <strong>Allow admins to approve comments.</strong>
          <p>This requires comments to first be approved by admins before they are visible.</p>
        </>
      )
    },
    {
      step: 4,
      title: 'Enable the sign-in button',
      active: step === 4,
      description: (
        <>
          <strong>This appears on the comment dialog.</strong>
          <p>We will provide a sign-in button for users that are not currently logged in.</p>
        </>
      )
    },
    {
      step: 5,
      title: 'Enable comment attachments',
      active: step === 5,
      description: (
        <>
          <strong>Toggle on/off comment attachments.</strong>
          <p>When this is on, users can attach webcam/screen/audio recordings, files, and images to their comments.</p>
        </>
      )
    },
    {
      step: 6,
      title: 'Enable device information',
      active: step === 6,
      description: (
        <>
          <strong>Show each commenter's device type.</strong>
          <p>When this is on, we show a small icon indicating what type of device the comment was created on.</p>
        </>
      )
    },
    {
      step: 7,
      title: 'Show comment index',
      active: step === 7,
      description: (
        <>
          <strong>This appears in the sidebar and on comment pin annotations.</strong>
          <p>When this is on, we show a small icon indicating the comment index in the order of creation date.</p>
        </>
      )
    },
    {
      step: 8,
      title: 'Enable priority',
      active: step === 8,
      description: (
        <>
          <strong>You can prioritize and filter comments.</strong>
          <p>By default, this feature is off. We also allow you to customize the list of priorities (shown below in the customize section).</p>
        </>
      )
    },
    {
      step: 9,
      title: 'Disable status',
      active: step === 9,
      description: (
        <>
          <strong>You can disable the default status filter.</strong>
          <p>By default, this feature is on. You can programatically enable or disable this feature. We also allow you to customize the list of priorities (shown in the next section).</p>
        </>
      )
    },
    {
      step: 10,
      title: 'Enable auto-categorize',
      active: step === 10,
      description: (
        <>
          <strong>You can enable AI auto-categorization of comments.</strong>
          <p>Be default, this feature is off. We use AI to analyze your comment content and auto-categorize it so you can filter comments easily. We also allow you to customize the list of categories (shown in the next section).</p>
        </>
      )
    },
    {
      step: 11,
      title: 'Disable dialog on hover',
      active: step === 11,
      description: (
        <>
          <strong>By default, a comment dialog preview will open on hover.</strong>
          <p>Hovering on a comment pin or a target element will open the comment dialog by default. You can disable this with the <code>disableDialogOnHover</code> input attribute.</p>
        </>
      )
    },
    {
      step: 12,
      title: 'Disable dialog on click',
      active: step === 12,
      description: (
        <>
          <strong>In Popover mode, the comment dialog will open on click.</strong>
          <p>Clicking on the popover target element will open the comment dialog by default. You can disable this with the <code>disableDialogOnClick</code> input attribute.</p>
        </>
      )
    },
    {
      step: 13,
      title: 'Disable floating comments mode',
      active: step === 13,
      description: (
        <>
          <strong>By default, we show a floating comment dialog next to comment annotations.</strong>
          <p>You can disable this feature altogether, for example if you only want to use stream or inbox mode exclusively.</p>
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

    <div data-snippyly-comment-disabled>
      <!-- This element cannot be commented on -->
    </div>

    <div id="some-element">
      <!-- This element is can be commented on -->
    </div>

    <snippyly-comments
      allowed-element-ids='["some-element"]'
      moderator-mode="true"
      sign-in-button="true"
      allow-attachments="true"
      show-device-info="true"
      show-comment-index="true"
      show-priority="true"
      show-status="false"
      auto-categorize="true"
      disable-dialog-on-hover="true"
      disable-dialog-on-click="true"
      floating-comments-mode="false"
    ></snippyly-comments>

  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}