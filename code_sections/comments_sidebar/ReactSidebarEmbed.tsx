import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactSidebarEmbed(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[11, 11]]
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
import {
  SnippylyCommentsSidebar,
} from '@veltdev/react';

export default function App() {

  return (
    <>
    
      <div className="sidebar-container">
        <SnippylyCommentsSidebar embedMode={true} />
      </div>

    </>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}