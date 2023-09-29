import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';
import { createGetSnippylyStep, createUseEffectStep } from '../../CommonSteps';

export default function ReactLocation(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[1, 1], [6, 6]],
    2: [[8, 9], [12, 13]],
    3: [[18, 18]],
    4: [[20, 20]],
    // 5: [[15, 21]],
  };

  const [step, setStep] = useState(1);

  const steps = [
    createGetSnippylyStep(step, 1),
    createUseEffectStep(step, 2),
    {
      step: 3,
      title: 'Set a location',
      active: step === 3,
      description: (
        <>
          <strong>This defines and initializes a space inside the document where users can collaborate. Think indiviudal slides inside a presentation.</strong>
          <p>Set a key/value paired object representing the location. This object can represent one or all of these dimensions at once: pages, sections, versions, frames (in video editor), data points on maps/charts etc.
            <br /> <br />
            Note that this is not a replacement for <code>documentId</code>. A <code>location</code> is always under a <code>document</code> in hierarchy.
            Once you set this, all Velt features will now be stored in a hierarcy like this: <code>document/location</code>.
          </p>

        </>
      )
    },
    {
      step: 4,
      title: 'Remove location',
      active: step === 4,
      description: (
        <>
          <strong>Removes the previously set location. After this only <code>document</code> level data will be shown or added.</strong>
          <p>Sometimes you may have a temporary location like a modal. When the modal opens, you should set the location and when it closes, you should remove the location.
          </p>
        </>
      )
    },
    // {
    //   step: 4,
    //   title: 'Set the nested location in the DOM',
    //   active: step === 4,
    //   description: (
    //     <>
    //       <strong>If you use the <code>addLocation</code> function, you need to set the corresponding location to your DOM.</strong>
    //       <p>In our example, we will set the same nested location object to our popup container.</p>
    //     </>
    //   )
    // },
    // {
    //   step: 5,
    //   title: 'Read from nested locations (optional)',
    //   active: step === 5,
    //   description: (
    //     <>
    //       <strong>You can dynamically add conditional locations as they render on the screen.</strong>
    //       <p>In our example, we have a popup where we only want to load annotations for it when it renders on the screen. For most use cases, this is not necessary.</p>
    //     </>
    //   )
    // },
  ];

  const code = `
import { useVeltClient } from '@veltdev/react';
import { useEffect, useState } from 'react';

export default function Collaboration() {

  const { client } = useVeltClient();

  useEffect(() => {
    if (client) {
      client.setDocumentID('unique-document-id');
    }
  }, [client]);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal && client) {
      client.setLocation({modalId: 'chart-details'});
    } else if (!showModal){
      client.removeLocation();
    }
  }, [client, showModal]);

  // Example component template
  return (
    <div>
      {
        showModal ? (
          <div className="modal">
            This is a modal!
          </div>
        ) : null
      }
    </div>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}