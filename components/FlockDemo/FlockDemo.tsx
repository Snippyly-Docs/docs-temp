import { useEffect, useRef, useState } from 'react';
import DemoContainer from "../DemoContainer/DemoContainer";
import styles from './FlockDemo.module.scss';

interface CursorDemoProps {
}

export default function CursorDemo(props: CursorDemoProps) {

  const iframe1Ref = useRef(null);
  const iframe2Ref = useRef(null);
  const [demoInitialized, setDemoInitialized] = useState(false);

  const createIFrame = (el, src) => {

    const iframe = document.createElement('iframe');
    iframe.src = src;
    // iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('frameborder', '0');
    el.appendChild(iframe);
    
  };

  useEffect(() => {

    if (demoInitialized) return;

    const documentId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
    fetch('https://us-central1-snippyly-sdk-prod.cloudfunctions.net/setCursorData', {
      method: 'POST',
      body: JSON.stringify({ documentId })
    }).then(data => {

      const src = `https://snippyly-docs-demo.web.app/flock?documentId=${documentId}&userIndex=0`;
      const src2 = `https://snippyly-docs-demo.firebaseapp.com/flock?documentId=${documentId}&userIndex=1`;
      
      createIFrame(iframe1Ref.current, src);
      createIFrame(iframe2Ref.current, src2);

      setDemoInitialized(true);

    }).catch(err => {
      console.log(err);
    });
        
  }, []);

  return (
    <DemoContainer>
      <div className={styles.iframeFlexContainer}>
        <div ref={iframe1Ref} className={styles.iframe}></div>
        <div ref={iframe2Ref} className={styles.iframe}></div>
      </div>
    </DemoContainer>
  );

}