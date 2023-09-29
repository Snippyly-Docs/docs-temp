
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactGetComments(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[9, 9]],
    2: [[11, 16]],
    3: [[18, 20]]
  };

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Get an instance of the comment element',
      active: step === 1,
      description: (
        <>
          <strong>Fetch the comment element from the Velt client.</strong>
          <p>At this point, the Velt instance should be loaded and available to you on the <code>window</code> object.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Filter comments by document id and location (optional)',
      active: step === 2,
      description: (
        <>
          <strong>You can fetch the comments that correspond to a document and location.</strong>
          <p>You can pass a document in by itself or with a corresponding location. We will send back an <code>Observable</code> which will listen to comment changes for that document and location.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Subscribe to comments',
      active: step === 3,
      description: (
        <>
          <strong>Subscribe to constant comment changes.</strong>
          <p>We will send you a new list of comments everytime there is a change so you can build out your own user UI and logic. You can pass in a <code>documentId</code> and <code>location</code> to filter out unwanted comments.</p>
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

    <script>
      const commentElement = window.Velt.getCommentElement();

      // Provide your own logic to determine the documentId and location
      const documentId = 'example-document-id';

      const location = {
        page: 'example-page'
      };

      commentElement.getAllCommentAnnotations(documentId, location).subscribe((comments) => {
        // Do something with the comments
      });
    </script>

    <snippyly-comments></snippyly-comments>

  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}