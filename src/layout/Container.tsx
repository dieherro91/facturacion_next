import styles from '../app/page.module.css';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <section className={styles.container}> {children}</section>;
};
