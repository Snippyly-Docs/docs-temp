import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactInboxOverview(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1]],
    2: [[8, 8]],
    3: [[11, 11]],
    4: [[11, 11]],
  };

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Import Comment components',
      active: step === 1,
      description: (
        <>
          <strong>Import the <code>VeltComments</code> component.</strong>
        </>
      )
    },
    {
      step: 2,
      title: 'Add Comment component with Inbox mode',
      active: step === 2,
      description: (
        <>
          <strong>Add the <code>VeltComments</code> component to the root of your app and mark the <code>inboxMode</code> property as <code>true</code>.</strong>
          <p>This component is required to render comments in your app. <br /> <br />
          This mode enable a more focused inbox style UI for each comment on the right side. Instead of showing a comment dialog box, it shows the given comment in a sidebar.
          You can combine this with other modes like Freestyle, Popover, Stream or Text.
          </p>
        </>
      )
    },
    {
      step: 3,
      title: 'Add Comment Tool component',
      active: step === 3,
      description: (
        <>
          <strong>Add the <code>VeltCommentTool</code> component wherever you want to show the comment tool button.</strong>
          <p>Clicking on it initiates comment mode & changes your mouse cursor to a comment pin.
            Now you can click anywhere on the document to attach comments to any elements.
          </p>
        </>
      )
    },
    {
      step: 4,
      title: 'Test Integration',
      active: step === 4,
      description: (
        <>
          <strong>Test it out by opening the page with Velt components in your browser.</strong>
          <p>You should be able to leave a comment by selecting some text or using the comment tool.</p>
        </>
      )
    }
  ];

  const code = `
import { VeltProvider, VeltComments, VeltCommentTool } from '@veltdev/react';

export default function App() {

  return (
    <VeltProvider apiKey="API_KEY">

      <VeltComments inboxMode={true} />

      <div class="toolbar">
        <VeltCommentTool />
      </div>

    </VeltProvider>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}