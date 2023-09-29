import styles from './Step.module.scss';
import React from 'react';

interface StepProps {
  title: string;
  step: number;
  description: React.ReactNode | string;
  handleClick: (step: number) => void;
  active: boolean;
  ref?: any;
}

export const Step = React.forwardRef(({title, description, step, handleClick, active}: StepProps, ref) => {
  return (
    <div ref={ref} data-step={step} className={styles.stepContainer}>
      <div className={styles.title}>
        <div className={styles.stepNumber}>{ step.toString() }</div>
        <h1 className={styles.titleText}>{ title }</h1>
      </div>
      <div className={`${styles.description} ${active ? styles.active : ''}`} onClick={() => handleClick(step)}>
        { description }
      </div>
    </div>
  );

});