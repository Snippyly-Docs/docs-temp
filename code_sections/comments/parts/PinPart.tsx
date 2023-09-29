
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';
import { createPartSteps } from '../../CommonSteps';

export default function PinPart(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1], [5, 5]],
    2: [[2, 4]],
    3: [[2, 4]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    ...createPartSteps(step)
  ];

  const code = `
snippyly-comment-pin::part(lock-icon) {
  width: 0.8rem;
  height: 0.8rem;
  color: grey;
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="css" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}