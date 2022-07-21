import styles from './layout.module.scss';
import Footer from '../Footer';
import Header from '../Header';
import Header1 from '../../components/commons/Header1';
import Header2 from '../../components/commons/Header2';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  column?: boolean;
};
const Layout = ({ children, title, subtitle, column }: Props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Header1>{title}</Header1>
      <Header2>{subtitle}</Header2>
      <main className={clsx(styles.main, column && styles.column)}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
