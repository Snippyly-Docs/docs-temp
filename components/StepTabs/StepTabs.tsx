import GlobalContext from '../globalContext';
import styles from './StepTabs.module.scss';
import { useRef, useContext, useEffect } from 'react';

interface StepTabsProps {
  frontendOptions: {[key: string]: React.ReactNode};
}

export default function StepTabs(props: StepTabsProps) {

  const { frontendOption, setFrontendOption } = useContext(GlobalContext);

  const hostRef = useRef(null);

  useEffect(() => {
    if (frontendOption === null) {
      const params = new URLSearchParams(window.location.search);
      if (params.has('frontend')) {
        setFrontendOption(params.get('frontend'));
        return;
      }
      setFrontendOption(Object.keys(props.frontendOptions)[0]);
    } 
  }, [frontendOption]);

  return (
    <>
      {Object.values(props.frontendOptions).length > 1 ?
        <div className={`${styles.flexContainer}`} ref={hostRef}>
          <div className={styles.spacer}></div>
          <div className={styles.stepTabs}>
            <h3>Frontend: </h3>
            {
              Object.keys(props.frontendOptions).map((key) => {
                return (
                  <div key={key} className={`${styles.tab} ${key === frontendOption ? styles.active : ''}`} onClick={() => setFrontendOption(key)}>
                    <p>{key}</p>
                  </div>
                );
              })
            }
          </div>
        </div>
        : undefined}
      {frontendOption in props.frontendOptions ? props.frontendOptions[frontendOption] : Object.values(props.frontendOptions)[0]}
    </>
  );
}