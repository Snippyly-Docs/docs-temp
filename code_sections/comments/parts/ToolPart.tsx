
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';
import { createPartSteps } from '../../CommonSteps';

export default function ToolPart(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1], [4, 4]],
    2: [[2, 3]],
    3: [[2, 3]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    ...createPartSteps(step)
  ];

  const code = `
snippyly-comment-tool::part(icon) {
  width: 1.5rem;
  height: 1.5rem;
}
    `;

  return <CodeSection sectionId={props.sectionId} mode="css" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}