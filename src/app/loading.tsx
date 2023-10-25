import styles from './layout.module.css';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className={styles.center_flex}>
      <span>Loading...</span>
    </div>
  );
}
