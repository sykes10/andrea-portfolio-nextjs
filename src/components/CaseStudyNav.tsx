import Link from "next/link";
import Button from "~/components/Button";
import IconArrow from "~/components/IconArrow";
import IconOpen from "~/components/IconOpen";
import type { CaseStudyNavProps } from "~/types/components";

const CaseStudyNav = ({ href }: CaseStudyNavProps) => {
  return (
    <section className="mt-24 mb-11 flex items-center justify-between">
      <Link href="/">
        <Button>
          <IconArrow className="-rotate-90" />
        </Button>
      </Link>
      <Link href={href} target="_blank">
        <Button className="flex items-center">
          Live site
          <IconOpen className="ml-2" />
        </Button>
      </Link>
    </section>
  );
};

export default CaseStudyNav;
