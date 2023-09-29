import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';
import { createGetSnippylyStep, createUseEffectStep } from '../../CommonSteps';

export default function ReactAuth(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[1, 1], [6, 6]],
    2: [[8, 8], [24, 24]],
    3: [[12, 12], [15, 20]],
    // 4: [[23, 23]],
    // 5: [[26, 26]],
    // 6: [[30, 39]],
    4: [[22, 22]],
    // 6: [[61, 61]]
  };

  const [step, setStep] = useState(1);

  const steps = [
    createGetSnippylyStep(step, 1),
    {
      step: 2,
      title: 'Create a useEffect hook',
      active: step === 2,
      description: (
        <>
          <strong>Create the hook with the <code>client</code> and <code>your authenticated user</code> as dependencies.</strong>
          {/* <p>Make sure to check that the <code>client</code> and user objects are not <code>null</code> or <code>undefined</code> before you use it.</p> */}
        </>
      )
    },
    {
      step: 3,
      title: 'Fetch relevant user info',
      active: step === 3,
      description: (
        <>
          <strong>Create a Velt <a href="/reference/general#user">User</a> object by taking the relevant fields from your authenticated User object. </strong>
          {/* <p>This will work with any authentication provider you use.</p> */}
        </>
        //TODO: Add api reference to user object.
      )
    },
    // {
    //   step: 4,
    //   title: 'Set a user plan (optional)',
    //   active: step === 4,
    //   description: (
    //     <>
    //       <strong>We cross-reference this field with the whitelisted user plans in your SDK configuration.</strong>
    //       <p>You can use this, for example, to restrict our collaboration features only for paid users, admins, etc.</p>
    //     </>
    //   )
    // },
    // {
    //   step: 5,
    //   title: 'Set a user group (optional)',
    //   active: step === 5,
    //   description: (
    //     <>
    //       <strong>Users in the same group can tag each other.</strong>
    //       <p>They can use the @tag in comments, or assign each other to tasks.</p>
    //     </>
    //   )
    // },
    // {
    //   step: 6,
    //   title: 'Manually set user contacts (optional)',
    //   active: step === 6,
    //   description: (
    //     <>
    //       <strong>An alternative to groups.</strong>
    //       <p>If user groups are not sufficient for your use-case, you can manually set user contacts to the user being identified.</p>
    //     </>
    //   )
    // },
    {
      step: 4,
      title: 'Pass the user object to the SDK',
      active: step === 4,
      description: (
        <>
          <strong>Call the <code>identify()</code> method and pass in the Velt User.</strong>
          {/* <p>Pass the Velt object you created above in the <code>identify()</code> method.</p> */}
        </>
      )
    },
    // {
    //   step: 6,
    //   title: 'Logout the user',
    //   active: step === 6,
    //   description: (
    //     <>
    //       <strong>Whenever your user logs out, call this method to clean up the session.</strong>
    //       <p>We will remove our UI components from the user's DOM.</p>
    //     </>
    //   )
    // }
  ];

  const code = `
import { useVeltClient } from '@veltdev/react';
import { useEffect } from 'react';

export default function App() {

  const { client } = useVeltClient();

  useEffect(() => {
    if (client && yourAuthenticatedUser) {

      // Fetch the relevant user info from your authenticated user object.
      const { uid, displayName, email, photoURL } = yourAuthenticatedUser;

      // Create the Velt user object
      const user = {
        userId: uid,
        name: displayName,
        email: email,
        photoUrl: photoURL
      };

      client.identify(user);
    }
  }, [client, yourAuthenticatedUser]);

  return (
    // Your app template
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}

  // // Example of your login function.
  // const loginHandler = async () => {    
  //   // In this example, we use some auth provider to sign in and get the user's credentials.
  //   const credentials = await authProvider.signInWithGoogle();
  //   // Fetch the relevant user info by destructuring the credentials.
  //   const { yourAuthenticatedUser } = credentials;
  // };