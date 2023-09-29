import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';

export default function ReactConfig(props: CodeSectionVariant) {
  const highlightRangeMap = {
    // 1: [[15, 15], [5, 10]],
    1: [[6, 6]],
    2: [[7, 7]],
    3: [[8, 8]],
    4: [[9, 9]]
  };

  const [step, setStep] = useState(1);

  const steps = [
    // {
    //   step: 1,
    //   title: 'Set extra configuration options',
    //   active: step === 1,
    //   description: (
    //     <>
    //       <strong>The <code>SnippylyProvider</code> component takes a <code>config</code> property.</strong>
    //       <p>You can pass in a configuration object that affects the SDK at a global level across your application.</p>
    //     </>
    //   )
    // },
    {
      step: 1,
      title: 'Set a URL whitelist',
      active: step === 1,
      description: (
        <>
          <strong>Provide partial URL strings to restrict SDK features to specific pages.</strong>
          <p>By default our features are enabled across your application.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Set a feature whitelist',
      active: step === 2,
      description: (
        <>
          <strong>Provide a subset of SDK features that you want to be enabled in this session.</strong>
          <p>By default, all core features are enabled. Use this to enable certain features based on user's plans.</p>
          <br></br>
          <p>
            When you identify/login your user, based on their plan type you can pass the list of features that should be enabled for them.
            e.g., enable only the Presence feature for Basic users, and Comments for Premium users.
            See all feature types here.</p>
        </>
        //TODO: Add link to feature types
      )
    },
    {
      step: 3,
      title: 'Restrict the SDK to certain user plans',
      active: step === 3,
      description: (
        <>
          <strong>Provide a list of user plans to restrict all SDK features to users in certain plans only.</strong>
          <p>As an example, you may not want to enable any collaboration feature for any Free plan users.
            When you identify/login your user, we will reference the user's plan and check it against the list provided above.</p>
        </>
        //TODO: Add link to setting user plan
      )
    },
    {
      step: 4,
      title: 'Restrict the SDK to certain users only',
      active: step === 4,
      description: (
        <>
          <strong>Provide a list of user IDs to restrict all SDK features to certain users only.</strong>
          <p>As an example, you could use this to run an experiment with certain beta testers only. When you identify/login your user, we will reference the user's ID and check it against the list provided above.</p>
        </>
      )
    }
  ];

  const code = `
import { SnippylyProvider } from '@veltdev/react';

export default function App() {

  const config = {
    urlAllowList: ['/about', '/contact-us'],
    featureAllowList: ['comments', 'presence'],
    userPlanAllowList: ['pro', 'enterprise', 'admin'],
    userIdAllowList: ['d5558f1f-bdea-4eb5-9fd5-ed657e460307'],
  };

  return (
    <SnippylyProvider 
      apiKey="YOUR_API_KEY" 
      config={config}
    >
      // Your app goes here
    </SnippylyProvider>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}