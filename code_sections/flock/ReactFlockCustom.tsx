import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';

export default function HTMLFlockOverview(props: CodeSectionVariant) {
  const highlightRangeMap = {
    1: [[2, 2], [6, 6], [12, 12]],
    2: [[13, 13]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Enable custom navigation',
      active: step === 1,
      description: (
        <>
          <strong>Use a callback for custom navigation or side-effects.</strong>
          <p>When the leader of a flock navigates, we can use the React Router to update the follower's position.
            In the callback you will receive a <code>PageInfo</code> object.
          </p>
        </>
      )
    },
    {
      step: 2,
      title: 'Disable default flock navigation',
      active: step === 2,
      description: (
        <>
          <strong>Disable default flock navigation.</strong>
          <p>Our default navigation uses <code>window.location.href</code> to detect navigation.
          If you are handling navigation using the callback method above, you should disable our default navigation.</p>
        </>
      )
    }
  ];

  const code = `
import { VeltPresence } from '@veltdev/react';
import { useNavigate } from 'react-router-dom';

export default function App() {

  const navigate = useNavigate();

  return (
    <div className="toolbar">
      <VeltPresence 
        flockMode={true}
        onNavigate={(pageInfo) => navigate(pageInfo.path)}
        defaultFlockNavigation={true}
      />
    </div>
  );
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="jsx" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />;
}