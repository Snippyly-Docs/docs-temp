import styles from './Subheading.module.scss';

export default function Subheading(props: any) {
  return <p className={styles.subheading}>{ props.children }</p>
}