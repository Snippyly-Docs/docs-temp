
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../../CodeSection';
import { createVariableSteps } from '../../CommonSteps';

export default function ToolVariables(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1], [3, 3]],
    2: [[2, 3]],
    3: [[2, 3]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    ...createVariableSteps(step, 'Comment Tool')
  ];

  const code = `
snippyly-comment-tool {
  --snippyly-comment-tool-icon-fill-color: slategrey;
  --snippyly-comment-tool-border-color: slate-grey;
}
`;

  return <CodeSection sectionId={props.sectionId} mode="css" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}