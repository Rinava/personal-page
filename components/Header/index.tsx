import { useState } from 'react';
import styles from './header.module.scss';
import clsx from 'clsx';
import UrlList from './UrlList';

import { HamburguerIcon } from '../commons/Icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleMenu(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <nav className={clsx(styles.nav_bar, isOpen && styles.nav_bar_open)}>
        <button className={styles.btn_open_menu} onClick={handleMenu}>
          <i className={styles.icon_menu}>
            <HamburguerIcon />
          </i>
        </button>
        <div className={styles.nav_mobile}>
          <UrlList isOpen={isOpen} />
        </div>
      </nav>
    </header>
  );
};
export default Header;
