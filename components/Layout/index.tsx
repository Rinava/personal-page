import styles from './layout.module.scss';
import Footer from '../Footer';
import Header from '../Header';
import Header1 from '../../components/commons/Header1';
import Header2 from '../../components/commons/Header2';
type Props = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
};
const Layout = ({ children, title, subtitle }: Props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Header1>{title}</Header1>
      <Header2>{subtitle}</Header2>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
