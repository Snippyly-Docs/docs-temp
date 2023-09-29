
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';
import PresenceDemo from '../../components/PresenceDemo/PresenceDemo';
import { createVariableSteps } from '../CommonSteps';

export default function HuddleVariables(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1], [5, 5]],
    2: [[2, 2], [6, 6]],
    3: [[2, 2], [6, 6]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    ...createVariableSteps(step, 'Presence')
  ];

  const code = `
velt-presence {
  --velt-presence-avatar-size: 1.5rem;
}
    `;

  return <CodeSection
  sectionId={props.sectionId}
  preview={ <PresenceDemo preview={true} classString="smallAvatar" naked={true} /> }
  mode="css" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}