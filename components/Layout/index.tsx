import styles from './layout.module.scss';
import Footer from '../Footer';
import Header from '../Header';
import Header1 from '../../components/commons/Header1';
import Header2 from '../../components/commons/Header2';
type Props = {
  children: React.ReactNode;
  h1?: string;
  h2?: string;
};
const Layout = ({ children, h1, h2 }: Props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Header1>{h1}</Header1>
      <Header2>{h2}</Header2>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
