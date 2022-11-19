import type { FooterLink } from "../data/footerNav";
import FooterNavLink from "./FooterNavLink";

type FooterNavProps = {
  links: FooterLink[];
};

export default function FooterNav({ links }: FooterNavProps) {
  return (
    <section className="flex flex-col justify-between gap-14 md:flex-row md:gap-20">
      {links.map((link) => (
        <FooterNavLink {...link} key={link.href} />
      ))}
    </section>
  );
}
