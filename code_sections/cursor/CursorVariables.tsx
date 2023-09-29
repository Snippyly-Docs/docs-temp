
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';
import CursorDemo from '../../components/CursorDemo/CursorDemo';
import { createVariableSteps } from '../CommonSteps';

export default function CursorVariables(props: CodeSectionVariant) {

  const highlightRangeMap = {
    1: [[1, 1], [3, 3]],
    2: [[2, 2]],
    3: [[2, 2]]
  };
  
  const [step, setStep] = useState(1);

  const steps = [
    ...createVariableSteps(step, 'Cursor')
  ];

  const code = `
velt-cursor {
  --velt-cursor-avatar-size: 1.5rem;
}
`;

  return <CodeSection
  sectionId={props.sectionId}
  preview={
    <CursorDemo avatarMode={true} />
  }
  mode="css" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}