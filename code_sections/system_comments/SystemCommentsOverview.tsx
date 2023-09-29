
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function SystemCommentsOverview(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[0, 0]],
    2: [[0, 0]],
    3: [[0, 0]],
    4: [[0, 0]],
    5: [[0, 0]],
    6: [[0, 0]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Visit the portal',
      active: step === 1,
      description: (
        <>
          <p>Open your web browser and navigate to <a href='https://snippyly-sdk-portal.web.app/' target={'_blank'}>snippyly-sdk-portal.web.app</a>.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Access the configurations menu',
      active: step === 2,
      description: (
        <>
          <p>Once you've logged in, locate and click on the <a href='https://snippyly-sdk-portal.web.app/dashboard/config' target={'_blank'}>Configuration</a> menu on the homepage or dashboard. This should be somewhere at the top or side of the page, depending on the website's layout.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Generate an authentication token',
      active: step === 3,
      description: (
        <>
          <p>Inside the <a href='https://snippyly-sdk-portal.web.app/dashboard/config' target={'_blank'}>Configuration</a> menu, find the 'Auth token' option.</p>
          <p>If a token hasn't been generated yet, click on the 'Generate token' option.</p>
        </>
      )
    },
    {
      step: 4,
      title: 'Copy the generated token',
      active: step === 4,
      description: (
        <>
          <p>After clicking on 'Generate token', a token should be displayed on the screen.</p>
          <p>Copy this token for later use. Make sure not to share it with anyone as it can provide access to your personal data.</p>
        </>
      )
    },
    {
        step: 5,
        title: 'Prepare the POST API request',
        active: step === 5,
        description: (
          <>
            <p>Now, prepare a POST API request using the JSON data mentioned as a reference in the side panel.</p>
            <p>Replace "your_token_here" with the token you copied earlier. Replace 'apiKey', 'documentId' and other values with your actual data.</p>
          </>
        )
      },
      {
        step: 6,
        title: 'Send the POST API request',
        active: step === 6,
        description: (
          <>
            <p>Finally, send the POST API request to `https://us-central1-snipply-sdk-staging.cloudfunctions.net/addSystemComment` API endpoint.</p>
            <p>If the request is successful, you should receive a 200 OK HTTP status code, along with a response from the server confirming that the comment has been added.</p>
          </>
        )
      }
  ];

  const code = `
{
    "apiKey": "your_api_key_here",
    "authToken": "your_token_here",
    "documentId": "your_document_id_here",
    "targetElement": {
        "elementId": "element_id", // optional (pass elementId if you want to comment on a specific element)
        "targetText": "target_text", // optional (pass targetText if you want to comment on a specific occurrence of the text)
        "occurrence": 1 // optional (default: 1)
    },
    "status": "open", // optional (default: open)
    "commentData": [
        {
            "commentText": "This is awesome! Well done.", // required
            "from": {
                "email": "user1@domain.com", // required
                "name": "User1" // optional
            }
        },
        {
            "commentText": "Thanks!",
            "from": {
                "email": "user2@domain.com",
                "name": "User2"
            }
        }
    ]
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}