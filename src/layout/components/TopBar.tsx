import styles from './layout.module.css';
import { ThemeButton } from '@/components/ThemeButton';

export const TopBar: React.FC = () => {
  return (
    <nav className={styles.topBar}>
      <ThemeButton />
    </nav>
  );
};
