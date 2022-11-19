import { Karla } from "@next/font/google";
import Footer from "../components/Footer";

import "../styles/globals.css";
const karla = Karla({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>This is a temporaty header</header>
        <main className={karla.className}>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
