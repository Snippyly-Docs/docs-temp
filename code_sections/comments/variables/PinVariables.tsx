
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';
import { createVariableSteps } from '../../CommonSteps';

export default function PinVariables(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1], [3, 3]],
    2: [[2, 2]],
    3: [[2, 2]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    ...createVariableSteps(step, 'Comment Pin')
  ];

  const code = `
snippyly-comment-pin {
  --snippyly-comment-pin-orphan-color: red;
}
`;

  return <CodeSection sectionId={props.sectionId} mode="css" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}