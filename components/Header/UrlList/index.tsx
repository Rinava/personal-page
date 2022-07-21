import Link from 'next/link';
import styles from './styles.module.scss';
import clsx from 'clsx';
type Props = {
  isOpen?: boolean;
  header?: boolean;
  urls: {
    title?: string;
    name: string;
    url: string;
    icon: React.ReactNode;
  }[];
};

const UrlList = ({ isOpen, header, urls }: Props) => {
  return (
    <ul
      className={clsx(
        header && styles.nav_list,
        isOpen && header && styles.nav_list_open,
        !header && styles.list
      )}>
      {urls.map(({ title, name, icon, url }, index) => {
        return (
          <li
            key={index}
            className={clsx(header ? styles.link_header : styles.link)}>
            <Link href={url}>
              <a title={title}>
                {icon && (
                  <i
                    aria-hidden='true'
                    className={clsx(header ? styles.icon_header : styles.icon)}>
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
