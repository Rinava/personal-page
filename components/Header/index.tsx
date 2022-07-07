import styles from './header.module.scss';
import clsx from 'clsx';
import {
  HomeIcon,
  ComputerIcon,
  HappyFaceIcon,
  ResumeIcon,
  LanguageIcon,
} from '../commons/Icons';

const Header = () => {
  return (
    <header>
      <nav className={styles.nav_bar}>
        <a title='Ir a la pantalla principal' className={styles.link}>
          <HomeIcon />
          Home
        </a>
        <a title='Ver mis proyectos' className={styles.link} href='wip.html'>
          <ComputerIcon />
          Proyectos
        </a>
        <a title='Ver más sobre mí' className={styles.link}>
          <HappyFaceIcon />
          Sobre Mí
        </a>
        <a title='Ver mi curriculum vitae' className={styles.link}>
          <ResumeIcon />
          Mi CV
        </a>
        <button
          title='Cambiar idioma'
          className={clsx(styles.link, styles.language)}>
          <LanguageIcon />
          Idioma
        </button>
      </nav>
    </header>
  );
};
export default Header;
