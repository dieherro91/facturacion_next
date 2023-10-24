import styles from '../app/page.module.css';

export const Main = ({ children }: { children: React.ReactNode }) => {
  return <section className={styles.main}>{children}</section>;
};
