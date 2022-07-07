import styles from './layout.module.scss';
import Footer from '../Footer';
import Header from '../Header';
type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
