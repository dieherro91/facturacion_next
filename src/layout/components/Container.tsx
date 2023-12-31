import styles from './layout.module.css';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <section className={styles.container}> {children}</section>;
};
