import { useState } from 'react';
import styles from './header.module.scss';
import clsx from 'clsx';
import UrlList from './UrlList';
import headerUrls from './UrlList/urls/headerUrls';
import { HamburguerIcon } from '../commons/Icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleMenu(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <nav className={clsx(styles.nav_bar, isOpen && styles.nav_bar_open)}>
        <button
          className={styles.btn_open_menu}
          onClick={handleMenu}
          aria-label='Menu'>
          <i aria-hidden='true' className={styles.icon_menu}>
            <HamburguerIcon />
          </i>
        </button>
        <div className={styles.nav_mobile}>
          <UrlList isOpen={isOpen} urls={headerUrls} header />
        </div>
      </nav>
    </header>
  );
};
export default Header;
