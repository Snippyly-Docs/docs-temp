
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactSidebarCustom(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[15, 21]],
    2: [[17, 17]],
    3: [[23, 29]]
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
          <p>We provide an event where you can set additional context associated with that comment, for example: what current tab or page of a table the comment lives on.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Provide additional context for comment location',
      active: step === 2,
      description: (
        <>
          <strong>The event handler should call the callback with any context you want saved.</strong>
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
<!doctype html>
<html lang="en">
  <head>
    <title>Comment Sidebar documentation</title>
  </head>
  <body>

    <snippyly-comments></snippyly-comments>
    <snippyly-comments-sidebar></snippyly-comments-sidebar>

    <script>

    let tabIndex = 0;

    function onCommentAdded(event) {
      // Add additional context to the comment using a callback
      event.detail.addContext({ selectedTabIndex: tabIndex });
    }

    const commentElement = document.querySelector('snippyly-comments');
    commentElement.addEventListener('commentAdded', onCommentAdded);

    function onCommentClick(data) {
      const { selectedTabIndex } = data.context;
      tabIndex = selectedTabIndex;
    }

    const sidebarElement = document.querySelector('snippyly-comments-sidebar');
    sidebarElement.addEventListener('sidebarCommentClicked', onCommentClick);

    </script>
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}