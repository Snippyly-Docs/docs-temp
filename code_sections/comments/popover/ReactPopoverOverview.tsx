
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactPopoverOverview(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1], [3, 5]],
    2: [[11, 11]],
    3: [[16, 18]],
    4: [[20, 22]],
    5: [[20, 22]]
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
      title: 'Add Comments component with Popover mode',
      active: step === 2,
      description: (
        <>
          <strong>Add the <code>VeltComments</code> component to the root of your app and mark the <code>popoverMode</code> property as <code>true</code>.</strong>
          <p>This component is required to render comments in your app. <br /> <br />
             Popover mode means that comments can be attached to specific target elements. The UX pattern is very similar to commenting in Google Sheets.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Add Comment Tool component',
      active: step === 3,
      description: (
        <>
        <strong>Add the <code>VeltCommentTool</code> component on each component where you want to enable commenting.</strong>

          <p>For example, in a table you could add this tool to each cell and show it on hover or right click context menu. <br /><br />
            You <b>must specify</b> a target element ID which binds the tool to that element. 
            When users click on the comment tool, it will attach a comment to the target element. <br /><br />
            Once the comment is saved, you will notice a triangle on the top right corner of the element indicating that a comment is present on this element.</p>
        </>
      )
    },
    {
      step: 4,
      title: 'Add the Comment Bubble component',
      active: step === 4,
      description: (
        <>
          <strong>(optional) This component accepts a target element ID & binds to the comment associated with it.</strong>
            <p>It also shows the total number of threads in the given comment.</p>
            <p>This gives you a lot of flexibility as you can place this component anywhere and provides a more obvious affordance to your users.</p>
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
          <p>Click on the comment tool and leave a comment on the target element.</p>
        </>
      )
    }
  ];

  const code = `
import { 
  VeltProvider, 
  VeltComments, 
  VeltCommentTool 
} from '@veltdev/react';

export default function App() {

  return (
    <VeltProvider apiKey="API_KEY">
      <VeltComments popoverMode={true} />

      <div class="table">
        <div className="cell" id="cell-id">

          <VeltCommentTool 
            targetCommentElementId="cell-id" 
          />

          <VeltCommentBubble 
            targetCommentElementId="cell-id" 
          />

        </div>
      </div>
    </VeltProvider>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}