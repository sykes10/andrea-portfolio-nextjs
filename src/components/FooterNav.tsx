import type { FooterLink } from "~/data/footerNav";
import FooterNavLink from "~/components/FooterNavLink";

type FooterNavProps = {
  links: FooterLink[];
};

const FooterNav = ({ links }: FooterNavProps) => {
  return (
    <section className="flex flex-col justify-between gap-14 md:flex-row md:gap-20">
      {links.map((link) => (
        <FooterNavLink {...link} key={link.href} />
      ))}
    </section>
  );
};

export default FooterNav;
