import styles from './page.module.css';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className={styles.center}>
      <span>Loading...</span>
    </div>
  );
}
