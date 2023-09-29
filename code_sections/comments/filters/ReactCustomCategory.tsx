import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactCustomCategory(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[12, 28]],
    2: [[16, 16], [21, 21], [26, 26]]
  };

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Define custom categories',
      active: step === 1,
      description: (
        <>
          <strong>Pass custom categories in the <code>setCustomCategories</code> method of the comment element.</strong>
          <p>We will replace our custom category assignments and filtering functionality to use the values you pass in.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Set the colors for each category',
      active: step === 2,
      description: (
        <>
          <strong>The <code>color</code> field determines the category pill background color.</strong>
          <p>Categories show up in the comments sidebar. You have to enable the auto-categorize feature for these to show.</p>
        </>
      )
    }
  ];

  const code = `
import { 
  SnippylyProvider, 
  SnippylyComments
} from '@veltdev/react';

export default function App() {

  return (
    <SnippylyProvider apiKey="API_KEY">
      <SnippylyComments 

        customCategories={[
        {
          "id": "enhancement",
          "name": "Enhancement",
          "color": "lightgrey"
        },
        {
          "id": "bug",
          "name": "Bug",
          "color": "red"
        },
        {
          "id": "feedback",
          "name": "Feedback"
          "color": "yellow"
        }
      ]}
      
      />
    </SnippylyProvider>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}