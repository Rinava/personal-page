import styles from './header.module.scss';
import urls from './urls';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className={styles.nav_bar}>
        <button className={styles.btn_open_menu} onClick={() => {}}>
          X
        </button>
        <div className={styles.nav_mobile}>
          <ul className={styles.nav_list}>
            {urls.map(({ title, name, icon, url }, index) => {
              return (
                <li key={index} className={styles.link}>
                  <Link href={url}>
                    <a title={title}>
                      {icon && <i className={styles.icon}>{icon}</i>}
                      <span className={styles.name}>{name}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
