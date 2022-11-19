import { type AppType } from "next/dist/shared/lib/utils";
import { Karla } from "@next/font/google";

import "../styles/globals.css";
const karla = Karla({ subsets: ["latin"], weight: ["400", "700"] });

console.log(karla.className);

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={karla.className}>
      <Component {...pageProps} />;
    </main>
  );
};

export default MyApp;
