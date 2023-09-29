
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactSidebarCustom(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[11, 16], [27, 29]],
    2: [[11, 16]],
    3: [[18, 22], [31, 33]]
  };

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Customize navigation for non-URL based navigation',
      active: step === 1,
      description: (
        <>
          <strong>By default, we attempt to navigate the user to the comment location when a user clicks on one in the sidebar.</strong>
          <p>You can pass a function which returns additional context associated with that comment, for example: what current tab or page of a table the comment lives on.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Provide additional context for comment location',
      active: step === 2,
      description: (
        <>
          <strong>The function should return any context you want saved.</strong>
          <p>When we return the location data of the comment, you can access the context field that was saved when the comment was created.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Provide an event handler for when a comment is clicked',
      active: step === 3,
      description: (
        <>
          <strong>When a comment is clicked, the handler will be called with the location data of the comment.</strong>
          <p>Using this handler, you can fetch the context and make the necessary state changes to locate the comment correctly.</p>
        </>
      )
    }
  ];

  const code = `
import { 
  SnippylyProvider, 
  SnippylyCommentsSidebar
} from '@veltdev/react';
import { useState } from 'react';

export default function App() {

  const [tabIndex, setTabIndex] = useState(0);

  const provideContext = () => {
    // Return any additional context you want saved with the comment
    return {
      selectedTabIndex: tabIndex
    };
  };

  const onCommentClick = (data) => {
    if (!data || !data.context) return;
    const { selectedTabIndex } = data.context;
    setTabIndex(selectedTabIndex);
  };

  return (
    <SnippylyProvider apiKey="API_KEY">

      <SnippylyComments
        contextProvider={provideContext}
      />

      <SnippylyCommentsSidebar 
        onSidebarCommentClick={onCommentClick}
      />

    </SnippylyProvider>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}