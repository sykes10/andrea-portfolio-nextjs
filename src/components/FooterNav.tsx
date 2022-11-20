import FooterNavLink from "~/components/FooterNavLink";
import type { FooterNavProps } from "~/types/components";

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
