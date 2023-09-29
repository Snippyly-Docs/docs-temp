import styles from './DemoContainer.module.scss';

export default function DemoContainer(props) {
  return (
    <div className={styles.demoContainer} style={props.height ? {height: props.height} : undefined}>
      {props.children}
    </div>
  );
}