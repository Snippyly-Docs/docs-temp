
import { useState } from 'react';
import CodeSection, { CodeSectionVariant } from '../CodeSection';
import CursorDemo from '../../components/CursorDemo/CursorDemo';
import { createPartSteps } from '../CommonSteps';

export default function CursorParts(props: CodeSectionVariant) {

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
velt-cursor::part(label-container) {
  border-radius: 0;
}
    `;

  return <CodeSection 
  sectionId={props.sectionId}
  preview={
    <CursorDemo noBorderRadius={true} />
  }
  mode="css" highlightRangeMap={highlightRangeMap} setStep={setStep} steps={steps} code={code} />
}