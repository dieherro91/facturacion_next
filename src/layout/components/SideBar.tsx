import Link from 'next/link';
import styles from '../app/layout.module.css';

export const SideBar: React.FC = () => {
  return (
    <div className={styles.sideBar}>
      <h3>Menu</h3>
      <br />
      <Link href="/">home</Link>
      <Link href="/dashboard">dashboard</Link>
      <Link href="/cosas">cosas</Link>
    </div>
  );
};
