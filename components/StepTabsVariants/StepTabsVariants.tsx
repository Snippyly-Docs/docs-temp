import GlobalContext from '../globalContext';
import styles from './StepTabsVariants.module.scss';
import React, { useRef, useContext, useState, useMemo, useEffect } from 'react';

interface StepTabsVariantsProps {
  options: {[frontendOption: string]: {[variantOption: string]: React.ReactNode}};
  referenceOptions: {[key: string]: {[key: string]: React.ReactNode}};
  sectionId: string;
}

export default function StepTabsVariants(props: StepTabsVariantsProps) {

  const { frontendOption, setFrontendOption } = useContext(GlobalContext);
  const { variantSuggestion, setVariantSuggestion, setVariantMap, variantMap } = useContext(GlobalContext);
  const [featureVariant, setFeatureVariant] = useState(null);

  const hostRef = useRef(null);

  const setURLAndFeatureVariant = (variant: string) => {
    const query = new URLSearchParams(window.location.search);
    query.set('variant', variant);
    let urlString = query.toString();
    if (window.location.hash !== '') urlString += `${window.location.hash}`;
    window.history.pushState(null , '', `?${urlString}`);
    setFeatureVariant(variant);
  };

  const renderOptions = (title: string, optionsArr: Array<string>, currentOption: string, setOption: Function) => {

    return (
      <>
        <h3>{title}: </h3>
        {
          optionsArr.map((option, idx) => {
            return (
              <div key={idx} className={`${styles.tab} ${option === currentOption? styles.active : ''}`} onClick={() => setOption(option)}>
                <p>{option}</p>
              </div>
            )
          })
        }
      </>
    );
  }

  useEffect(() => {
    if (variantSuggestion in Object.values(props.options)[0]) {
      if (variantSuggestion !== featureVariant) {
        setFeatureVariant(variantSuggestion);
      }
    }
  }, [variantSuggestion]);

  useEffect(() => {

    // Set cached item based on unique key of section Id
    const key = window.location.pathname + '#' + props.sectionId;

    if (featureVariant === null) {
      const cachedFeatureVariant = sessionStorage.getItem(`fv-${key}`);
      if (cachedFeatureVariant && cachedFeatureVariant in Object.values(props.options)[0]) {
        setFeatureVariant(cachedFeatureVariant);
        setVariantSuggestion(cachedFeatureVariant);
      } else {

        const params = new URLSearchParams(window.location.search);
        if (params.has('variant') && params.get('variant') in Object.values(props.options)[0]) {
          setFeatureVariant(params.get('variant'));
        } else {
          setFeatureVariant(Object.keys(Object.values(props.options)[0])[0]);
        }
      }
    } else {
      if (featureVariant !== variantSuggestion) {
        setVariantSuggestion(featureVariant);
      }

      sessionStorage.setItem(`fv-${key}`, featureVariant);

    }

    setVariantMap((prevMap) => {
      return {
        ...prevMap,
        [key]: featureVariant
      };
    });

  }, [featureVariant]);

  const activeOption = useMemo(() => {
    if (frontendOption in props.options && featureVariant in props.options[frontendOption]) {
      return props.options[frontendOption][featureVariant];
    }

    if (frontendOption in props.options) {
      return Object.values(props.options[frontendOption])[0];
    }

    if (featureVariant in Object.values(props.options)[0]) {
      return Object.values(props.options)[0][featureVariant];
    }
  }, [featureVariant, frontendOption, props.options]);

  const activeReference = useMemo(() => {

    if (!props.referenceOptions) return;

    if (frontendOption in props.referenceOptions && featureVariant in props.referenceOptions[frontendOption]) {
      return props.referenceOptions[featureVariant][frontendOption];
    }

    if (frontendOption in props.options) {
      return Object.values(props.referenceOptions[frontendOption])[0];
    }

    if (featureVariant in Object.values(props.options)[0]) {
      return Object.values(props.referenceOptions)[0][featureVariant];
    }
  }, [featureVariant, frontendOption, props.referenceOptions]);


  return (
    <>
      {Object.keys(props.options).length > 1 || Object.keys(Object.values(props.options)[0]).length > 1 ?
        <div className={`${styles.flexContainer}`} ref={hostRef}>
          <div className={styles.spacer}></div>
          <div className={styles.stepTabs}>
            <div>
              {
                Object.keys(Object.values(props.options)[0]).length > 1 ?
                  renderOptions('Type', Object.keys(Object.values(props.options)[0]), featureVariant, setURLAndFeatureVariant)
                  : null
              }
            </div>
            <div>
              {
                Object.keys(props.options).length > 1 ?
                  renderOptions('Frontend', Object.keys(props.options), frontendOption, setFrontendOption)
                  : null
              }
            </div>
          </div>
        </div>
        : undefined}
      {activeOption && React.cloneElement(activeOption, { key: `${featureVariant}-${frontendOption}` })}
      {activeReference && React.cloneElement(activeReference, { key: `${featureVariant}-${frontendOption}-reference` })}
    </>
  );
}