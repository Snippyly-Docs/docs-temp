import { useEffect, useRef, useState } from 'react';
import DemoContainer from "../DemoContainer/DemoContainer";
import styles from './UserInviteDemo.module.scss';

export default function UserInviteDemo(props: any) {

  const iframeRef = useRef(null);
  const [demoInitialized, setDemoInitialized] = useState(false);

  const createIFrame = (el, src) => {
 
    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('frameborder', '0');
    el.appendChild(iframe);
    
  };

  useEffect(() => {

    if (demoInitialized) return;

    let classString = props.classString || '';

    const src = `https://snippyly-docs-demo.web.app/user-invite-tool?documentId=user-invite-docs&userIndex=0${classString !== '' ? `&classString=${classString}` : ''}`;
    
    createIFrame(iframeRef.current, src);

    setDemoInitialized(true);
        
  }, []);

  if (props.preview) {
    return (
      <div className={styles.iframeFlexContainer}>
        <div ref={iframeRef} className={styles.iframe}></div>
      </div>
    )
  }

  return (
    <DemoContainer height="650px">
      <div className={styles.iframeFlexContainer}>
        <div ref={iframeRef} className={styles.iframe}></div>
      </div>
    </DemoContainer>
  );

}