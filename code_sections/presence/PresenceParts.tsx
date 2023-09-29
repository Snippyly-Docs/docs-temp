
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';
import PresenceDemo from '../../components/PresenceDemo/PresenceDemo';
import { createPartSteps } from '../CommonSteps';

export default function PresenceParts(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1], [11, 11]],
    2: [[2, 10]],
    3: [[2, 10]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    ...createPartSteps(step)
  ];

  const code = `
velt-presence::part(user-avatar)::before {
  content: "";
  position: absolute;
  border-radius: 50%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255, 0, 0, 0.5), rgba(0, 255, 0, 0.5));
  pointer-events: none;
}
`;

  return <CodeSection 
  sectionId={props.sectionId}
  preview={ <PresenceDemo preview={true} classString="partsDemo" naked={true} /> }
  mode="css" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}