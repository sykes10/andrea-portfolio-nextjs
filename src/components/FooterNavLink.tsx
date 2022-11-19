import Link from "next/link";
import Image from "next/image";
import type { FooterLink } from "../data/footerNav";

export default function FooterNavLink({
  href,
  description,
  tag,
  alt,
  src,
}: FooterLink) {
  return (
    <Link className="w-full md:w-1/2" href={`/case-study/${href}`}>
      <Image
        src={`/images/previews/${src}@2x.png`}
        alt={alt}
        loading="lazy"
        className="mb-8"
        height={1124}
        width={728}
      />
      <h2 className="mb-3">{description}</h2>
      <span className="uppercase text-peach-500">{tag}</span>
    </Link>
  );
}
