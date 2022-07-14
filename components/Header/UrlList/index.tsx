import Link from 'next/link';
import styles from './styles.module.scss';
import urls from './urls';
import clsx from 'clsx';
type Props = {
  isOpen: boolean;
};

const UrlList = ({ isOpen }: Props) => {
  return (
    <ul className={clsx(styles.nav_list, isOpen && styles.nav_list_open)}>
      {urls.map(({ title, name, icon, url }, index) => {
        return (
          <li key={index} className={styles.link}>
            <Link href={url}>
              <a title={title}>
                {icon && (
                  <i aria-hidden='true' className={styles.icon}>
                    {icon}
                  </i>
                )}
                <span className={styles.name}>{name}</span>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default UrlList;
