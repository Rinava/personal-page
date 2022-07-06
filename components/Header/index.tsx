import styles from './header.module.scss';
const Header = () => {
  return (
    <header>
      <nav className={styles.nav_bar}>
        <a
          title='Ir a la pantalla principal'
          className={styles.link}
          href='index.html'>
          <i class='material-icons'>home</i> Home
        </a>
        <a title='Ver mis proyectos' className={styles.link} href='wip.html'>
          <i class='material-icons'>computer</i>Proyectos
        </a>
        <a
          title='Ver más sobre mí'
          className={styles.link}
          href='about-me.html'>
          <i class='material-icons'>sentiment_very_satisfied</i>Sobre Mí
        </a>
        <a
          title='Ver mi curriculum vitae'
          className={styles.link}
          href='cv.html'>
          <i class='material-icons'>article</i>Mi CV
        </a>
      </nav>
    </header>
  );
};
export default Header;
