import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';
import { createGetSnippylyStep, createUseEffectStep } from '../../CommonSteps';

export default function ReactAuthLogoutUser(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[12, 12]],
    2: [[26, 26]],
    3: [[29, 29]],
  };

  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Logout the user',
      active: step === 1,
      description: (
        <>
          <strong>Whenever your user logs out, call this method to clean up the session.</strong>
          <p>We will remove our UI components from the user's DOM.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Make user an admin.',
      active: step === 2,
      description: (
        <>
          <strong>This is relevant for the Comments feature in moderator mode. Admin users can approve or delete any comments. </strong>
          <p>Learn more about the feature here.</p>
        </>
        //TODO: Add link to moderator mode feature.
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
  ];

  const code = `
import { useVeltClient } from '@veltdev/react';
import { useEffect } from 'react';

export default function App() {
  // Example logout function
  const logout = async () => {

    // Logout with your auth provider.
    await authProvider.signOut();

    // Clear the Velt user object. Ensure that client is not null or undefined.
    client.signOutUser();
  };

  useEffect(() => {
    if (client && yourAuthenticatedUser) {
      const { uid, displayName, email, photoURL } = yourAuthenticatedUser;

      const user = {
        userId: uid,
        name: displayName,
        email: email,
        photoUrl: photoURL
      };

      user.isAdmin = true;

      // Use your own logic to determine the user's plan
      user.plan = 'premium';

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