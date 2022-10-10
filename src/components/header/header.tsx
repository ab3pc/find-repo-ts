import { ThemeSwitcher } from 'components/theme-switcher';

import styles from './header.module.scss';

export const Header = () => (
  <div className={styles.header}>
    <div className={styles.logo}>find-repo</div>
    <ThemeSwitcher/>
  </div>
);
