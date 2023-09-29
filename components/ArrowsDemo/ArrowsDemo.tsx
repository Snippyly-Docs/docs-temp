import { useEffect, useRef, useState } from 'react';
import DemoContainer from "../DemoContainer/DemoContainer";
import styles from './ArrowsDemo.module.scss';

interface ArrowsDemoProps {
  demoUrl: string;
}

export default function ArrowsDemo(props: ArrowsDemoProps) {

  const iframeRef = useRef(null);
  const [demoInitialized, setDemoInitialized] = useState(false);

  const createIFrame = (el, src) => {
 
    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.setAttribute('frameborder', '0');
    el.appendChild(iframe);
    
  };

  useEffect(() => {

    if (demoInitialized) return;

    const documentId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
    fetch('https://us-central1-snippyly-sdk-prod.cloudfunctions.net/setArrowData', {
      method: 'POST',
      body: JSON.stringify({ documentId })
    }).then(data => {

      let demoUrl = props.demoUrl;

      const src = `https://snippyly-docs-demo.web.app/${demoUrl}?documentId=${documentId}&userIndex=0`;
      
      createIFrame(iframeRef.current, src);

      setDemoInitialized(true);

    }).catch(err => {
      console.log(err);
    });
        
  }, []);

  return (
    <DemoContainer height="450px">
      <div className={styles.iframeFlexContainer}>
        <div ref={iframeRef} className={styles.iframe}></div>
      </div>
    </DemoContainer>
  );

}