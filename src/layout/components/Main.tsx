import styles from '../app/layout.module.css';

export const Main = ({ children }: { children: React.ReactNode }) => {
  return <section className={styles.main}>{children}</section>;
};
