import styles from './layout.module.scss';
import Footer from '../Footer';
import Header from '../Header';
const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
