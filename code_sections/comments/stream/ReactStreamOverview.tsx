
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactPopoverOverview(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1]],
    2: [[15, 16], [18, 18]],
    3: [[17, 17]],
    4: [[23, 23]],
    5: [[23, 23]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Import Comment components',
      active: step === 1,
      description: (
        <>
          <strong>Import the <code>VeltComments</code> component and the <code>VeltCommentTool</code> component.</strong>
        </>
      )
    },
    {
      step: 2,
      title: 'Add Comment component with Stream mode',
      active: step === 2,
      description: (
        <>
          <strong>Add the <code>VeltComments</code> component to the root of your app and mark the <code>streamMode</code> property as <code>true</code>.</strong>
          <p>This component is required to render comments in your app. <br /> <br />
            Stream mode renders all comment dialog boxes in a column on the right side similar to Google Docs.
          </p>
        </>
      )
    },
    {
      step: 3,
      title: 'Add the Stream View container ID',
      active: step === 3,
      description: (
        <>
          <strong>Pass the DOM ID of the main scrolling element. This helps us position & scroll the comment stream as the user scrolls.</strong>
          <p>Alternatively, you can move <code>VeltComments</code> component inside the scrolling container and ensure that its the sibling of the target content.
          
          </p>
        </>
      )
    },
    {
      step: 4,
      title: 'Add Comment Tool component',
      active: step === 4,
      description: (
        <>
          <strong>(optional) Add the <code>VeltCommentTool</code> component wherever you want to show the comment tool button.</strong>
          <p>This is optional as most developers use Stream mode to enable commenting on text vs any element on the DOM.
            However, if you do need to enable commenting on any element, you can use this tool. <br /><br />
            Clicking on it initiates comment mode & changes your mouse cursor to a comment pin.
            Now you can click anywhere on the document to attach comments to any elements.
          </p>
        </>
      )
    },
    {
      step: 5,
      title: 'Test Integration',
      active: step === 5,
      description: (
        <>
          <strong>Test it out by opening the page with Velt components in your browser.</strong>
          <p>Select text to attach a comment to it. If you have added <code>VeltCommentTool</code>, click on it and click anywhere on the page to add a comment.</p>
        </>
      )
    }
  ];

  const code = `
import { VeltProvider, VeltComments, VeltCommentTool } from '@veltdev/react';

export default function App() {

  return (
    <VeltProvider apiKey="API_KEY">

      <div id="scrolling-container-id">

        //This element is scrollable
        <div class="target-content">
          //This element contains the content that you want to be commented.
        </div>

        <VeltComments
          streamMode={true}
          streamViewContainerId="scrolling-container-id"
        />

      </div>

      <div class="toolbar">
        <VeltCommentTool />
      </div>

    </VeltProvider>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}