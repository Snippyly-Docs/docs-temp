import styles from './CodeSnippet.module.scss';

export default function CodeSnippet(props) {

  // TODO: Implement copy functionality

  return (
    <>
      <div className={styles.codeSnippet}>
        <code>
          {props.children}
        </code>
      </div>
    </>
  );
}