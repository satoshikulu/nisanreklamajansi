import { Header, Footer } from './index';

const Layout = ({ children }) => {
 return (
    <>
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
