
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';
import { createPartSteps } from '../../CommonSteps';

export default function BubblePart(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1], [3, 3]],
    2: [[2, 2]],
    3: [[2, 2]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    ...createPartSteps(step)
  ];

  const code = `
snippyly-comment-bubble::part(count) {
  font-size: 14px;
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="css" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}