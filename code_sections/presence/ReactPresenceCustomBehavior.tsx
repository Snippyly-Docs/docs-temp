import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function ReactPresenceCustomBehavior(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[8, 8]],
    2: [[9, 9]],
    3: [[10, 10]],
    4: [[11, 11]],
    5: [[12, 12]],
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Set inactivity time',
      active: step === 1,
      description: (
        <>
          <strong>Set the time it takes for a user to go inactive in milliseconds.</strong>
          <p>By default we mark a user as inactive if they do not take any action on the document within a 5 mins timeframe. <br />
            If they unfocus the tab, we mark them inactive immediately.</p>
        </>
      )
    },
    {
      step: 2,
      title: 'Add Presence to a Location',
      active: step === 2,
      description: (
        <>
          <strong>Show users' presence on a <code>Location</code>.</strong>
          <p>Set the <code>location</code> attribute on the Presence element.
          When there are users at that location, their avatars will show in this Presence element. <br /><br />
          Eg: For a Presentation tool, you can add <code>Presence</code> component at the main <code>document</code> level and
           add another <code>Presence</code> component on the slide thumbnails.
          This will render avatars at both presentation level & slide thumbnail level. For slide thumbnails, it will only show users active on that slide.
          </p>
        </>
      )
    },
    {
      step: 3,
      title: 'Set max users',
      active: step === 3,
      description: (
        <>
          <strong>Set how many Presence avatars to display at a time.</strong>
          <p>You can set this via the maxUsers attribute. Any extra avatars will be hidden and shown in an avatar which indicates the number of extra users.</p>
        </>
      )
    },
    {
      step: 4,
      title: 'Enable Flock Mode',
      active: step === 4,
      description: (
        <>
          <strong>Enable Flock Mode Feature.</strong>
          <p>This will enable Flock mode as an option for your users globally, wherever <code>Presence</code> is shown.
          <br />
          To start the shared flock session, click on a user's avatar to start following them.
          <br /><br />
          Learn more about it in the Flock Mode feature section.
          </p>
        </>
        //TODO: add link to flock mode feature section
      )
    },
    {
      step: 5,
      title: 'Subscribe to changes in User Presence',
      active: step === 5,
      description: (
        <>
          <p>Whenever the presence for any user changes, we emit this event with the updated list of users currently online on this <code>document</code>.
          </p>
        </>
      )
    },
  ];

  const code = `
import { VeltPresence } from '@veltdev/react';

export default function App() {

  return (
    <div className="toolbar">
      <VeltPresence
        inactivityTime={30000}
        location={{page: 1}}
        maxUsers={3}
        flockMode={true}
        onPresenceUserChange={(presenceUsers) => yourMethod(presenceUsers)}
      />
    </div>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}