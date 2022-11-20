import FooterNavLink from "~/components/FooterNavLink";
import type { FooterNavProps } from "~/types/components";
import IconDivider from "~/components/IconDivider";

const FooterNav = ({ links }: FooterNavProps) => {
  return (
    <>
      <IconDivider className="mx-auto mb-14 md:mb-24" />
      <section className="flex flex-col justify-between gap-14 md:flex-row md:gap-20">
        {links.map((link) => (
          <FooterNavLink {...link} key={link.href} />
        ))}
      </section>
    </>
  );
};

export default FooterNav;
