import styles from '../app/layout.module.css';
import { ThemeButton } from '@/app/components/ThemeButton';

export const TopBar: React.FC = () => {
  console.log('styles', styles);
  return (
    <nav className={styles.topBar}>
      <ThemeButton />
    </nav>
  );
};
