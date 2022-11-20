import Header from "~/components/Header";
import Footer from "~/components/Footer";
import type { LayoutProps } from "~/types/components";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-auto min-h-screen overflow-hidden bg-background">
      <Header />
      <main className="container mb-6 lg:mb-24">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
