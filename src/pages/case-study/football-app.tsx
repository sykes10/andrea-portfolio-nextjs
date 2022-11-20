import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { footerNavLinksData } from "~/data/footerNav";
import { FooterLinkKey } from "~/types/data";
import FooterNav from "~/components/FooterNav";
import Button from "~/components/Button";
import IconArrow from "~/components/IconArrow";
import IconOpen from "~/components/IconOpen";
const FootballApp = () => {
  const footerNavLinks = [
    footerNavLinksData[FooterLinkKey.Atriom],
    footerNavLinksData[FooterLinkKey.EmailOctopus],
  ];
  return (
    <>
      <Head>
        <meta name="description" content="" />
      </Head>
      <FooterNav links={footerNavLinks}></FooterNav>
    </>
  );
};

export default FootballApp;
