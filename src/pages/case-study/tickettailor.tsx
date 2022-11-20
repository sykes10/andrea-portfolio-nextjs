import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { footerNavLinksData } from "~/data/footerNav";
import FooterNav from "~/components/FooterNav";
import Button from "~/components/Button";
import IconArrow from "~/components/IconArrow";
import IconOpen from "~/components/IconOpen";
import IconDivider from "~/components/IconDivider";

const TicketTailor = () => {
  const footerNavLinks = [
    footerNavLinksData.EmailOctopus,
    footerNavLinksData.TicketTailor,
  ];
  return (
    <>
      <Head>
        <title>AndreaDN. | Vector case study</title>
        <meta name="description" content="Vector re-design case study" />
      </Head>
      <IconDivider className="mx-auto mb-14 md:mb-24" />
      <FooterNav links={footerNavLinks}></FooterNav>
    </>
  );
};

export default TicketTailor;
