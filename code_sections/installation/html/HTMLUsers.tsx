import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function HTMLUsers(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[14, 15]],
    2: [[17, 30]],
    3: [[32, 33]],
    4: [[35, 36]],
    5: [[38, 49]],
    6: [[51, 53]],
    7: [[57, 68]]
  };

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Identify your users',
      active: step === 1,
      description: (
        <>
          <strong>For our SDK to work correctly, we need to identify your users.</strong>
          <p>You should identify users in the same function where you perform user authentication (login).</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Fetch relevant user info',
      active: step === 2,
      description: (
        <>
          <strong>Keep any relevant user info from whatever authentication provider you use.</strong>
          <p>Things like the user name, avatar, and ID can be re-used to identify your users. Create a Velt User object, which will be passed to the SDK.</p>
        </>
      )
    },
    {
      step: 3,
      title: 'Set a user plan (optional)',
      active: step === 3,
      description: (
        <>
          <strong>We cross-reference this field with the whitelisted user plans in your SDK configuration.</strong>
          <p>You can use this, for example, to restrict our collaboration features only for paid users, admins, etc.</p>
        </>
      )
    },
    {
      step: 4,
      title: 'Set a user group (optional)',
      active: step === 4,
      description: (
        <>
          <strong>Users in the same group can tag each other.</strong>
          <p>They can use the @tag in comments, or assign each other to tasks.</p>
        </>
      )
    },
    {
      step: 5,
      title: 'Manually set user contacts (optional)',
      active: step === 5,
      description: (
        <>
          <strong>An alternative to groups.</strong>
          <p>If user groups are not sufficient for your use-case, you can manually set user contacts to the user being identified.</p>
        </>
      )
    },
    {
      step: 6,
      title: 'Pass the user object to the SDK',
      active: step === 6,
      description: (
        <>
          <strong>Call the <code>identify</code> function.</strong>
          <p>Use the Velt client object to pass the user information to our servers.</p>
        </>
      )
    },
    {
      step: 7,
      title: 'Logout the user',
      active: step === 7,
      description: (
        <>
          <strong>Identify when the user logs out.</strong>
          <p>We will remove our UI features from the user's client.</p>
        </>
      )
    }
  ];

  const code = `
<!doctype html>
<html lang="en">
  <head>
    <title>Users documentation</title>
  </head>
  <body>

    <!-- Your content goes here -->

    <script type="module" src="https://cdn.jsdelivr.net/npm/@snippyly/sdk@1.0.112/snippyly.js" onload="loadSnippyly()"></script>

    <script>

      // Example login function
      async function loginUser() {
        
        // In this example, we use some auth provider to sign in and get the user's credentials
        const credentials = await authProvider.signInWithGoogle();

        // Fetch the relevant user info by destructuring the credentials
        const { userInfo } = credentials;
        const { uid, displayName, email, photoURL } = userInfo;

        // Create the Velt user object
        const user = {
          userId: uid,
          name: displayName,
          email: email,
          photoUrl: photoURL
        };

        // Use your own logic to determine the user's plan
        user.plan = 'premium';

        // Use your own logic to determine the group the user belongs to
        user.groupId = 'developers';

        // You can pass contacts as an array of UserContact objects
        // These contacts will show up in comment tagging and assignment 
        const contacts = [
          {
            userId: 'd5558f1f-bdea-4eb5-9fd5-ed657e460307',
            name: 'John Doe',
            photoUrl: 'https://i.pravatar.cc/300',
            email: 'john.doe@snippyly.com',
            groupId: 'developers'
          }
        ];
        user.contacts = contacts;

        if (window.Velt) {
          window.Velt.identify(user);
        }

      }

      // Example logout function
      async function logout() {

        // Logout with your auth provider
        await authProvider.signOut();

        // Clear the Velt user object
        if (window.Velt) {
          window.Velt.signOutUser();
        }

      }

    </script>
    
  </body>
</html>
    `;

  return <CodeSection sectionId={props.sectionId} mode="html" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}