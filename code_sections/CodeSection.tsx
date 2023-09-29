import { useState, useContext, useEffect } from 'react';
import SplitPane from '../components/SplitPane/SplitPane';
import StepList from '../components/StepList/StepList';
import CodeSampleWrapper from '../components/CodeSampleWrapper/CodeSampleWrapper';
import GlobalContext from '../components/globalContext';
import { useRouter } from 'next/router';

export interface CodeSectionVariant {
  sectionId: string;
}

export interface CodeSectionProps {
  highlightRangeMap: {[key: number]: number[][]},
  steps: {
    step: number;
    title: string;
    active: boolean;
    description: React.ReactNode;
  }[];
  mode: string;
  code: string;
  setStep: (step: number) => void;
  preview?: React.ReactNode;
  sectionId: string;
}

export default function CodeSection(props: CodeSectionProps) {

  const [scrollLine, setScrollLine] = useState(undefined);
  const [highlightRanges, setHighlightRanges] = useState(props.highlightRangeMap[1]);
  const { setActiveHeader, frontendOption, variantMap } = useContext(GlobalContext);
  const { push, query } = useRouter();

  const setQueryFrontendOption = () => {
    const query = new URLSearchParams(window.location.search);
    if (query.has('frontend') && query.get('frontend') === frontendOption && frontendOption !== null) return;
    query.set('frontend', frontendOption);
    let urlString = query.toString();
    if (window.location.hash !== '') urlString += `${window.location.hash}`;
    window.history.pushState(null, '', `?${urlString}`);
  };

  useEffect(() => {
    if (frontendOption !== null) setQueryFrontendOption();
  });

  useEffect(() => {
    if (frontendOption === null) return;
    setQueryFrontendOption();
  }, [frontendOption]);

  const handleStepChanged = (step) => {
    if (step !== null) {
      setActiveHeader(props.sectionId);
      const key = window.location.pathname + '#' + props.sectionId;
      if (!window.location.hash.includes(`#${props.sectionId}`) || query.step !== step || query.variant !== variantMap[key]) {
        const params = new URLSearchParams(window.location.search);
        params.set('step', step);
        if (!variantMap[key]) params.delete('variant');
        else params.set('variant', variantMap[key]);
        let urlString = `?${params.toString()}`;
        urlString += `#${props.sectionId}`;
        window.history.pushState(null, '', urlString);
      }
      if (step in props.highlightRangeMap) {
        setHighlightRanges(props.highlightRangeMap[step]);
        // Take the first value of the first range, and the last value of the last range
        // Set the scroll line to the middle of the range

        const firstRange = props.highlightRangeMap[step][0];
        const lastRange = props.highlightRangeMap[step][props.highlightRangeMap[step].length - 1];
        const firstLine = firstRange[0];
        const lastLine = lastRange[1];
        const middleLine = Math.floor((firstLine + lastLine) / 2);
        setScrollLine(middleLine);
      }

      props.setStep(step);
    } else {
      setActiveHeader(null);
      const oldParams = new URLSearchParams(window.location.search);
      const newParams = {} as any;
      if (oldParams.has('review')) newParams['review'] = true;
      if (oldParams.has('frontend')) newParams['frontend'] = oldParams.get('frontend');
      const key = window.location.pathname + '#';
      if (key in variantMap) newParams.variant = variantMap[key];
      push({query: newParams}, undefined, { shallow: true });
    }
  }

  return (
    <SplitPane
      left={
        <StepList sectionId={props.sectionId} steps={props.steps} handleStepChanged={handleStepChanged} />
      }
      right={
        <CodeSampleWrapper
          mode={props.mode}
          scrollToLine={scrollLine}
          highlightRanges={highlightRanges}
          code={props.code}
          preview={props.preview}
        />
      }
    />
  );
}