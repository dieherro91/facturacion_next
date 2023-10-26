import { FaFileInvoice } from 'react-icons/fa';
import styles from './layout.module.css';
import { ButtonTheme } from '@/components/molecules';
import Link from 'next/link';

export const TopBar: React.FC = () => {
  return (
    <nav className={styles.topBar}>
      <Link href={'/'}>
        <FaFileInvoice style={{ color: 'red', fontSize: '25px' }} />
      </Link>
      <ButtonTheme />
    </nav>
  );
};
