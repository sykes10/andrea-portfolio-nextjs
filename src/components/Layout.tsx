import Header from "~/components/Header";
import Footer from "~/components/Footer";

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
