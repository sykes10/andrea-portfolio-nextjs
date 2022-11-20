import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { footerNavLinksData } from "~/data/footerNav";
import { FooterLinkKey } from "~/types/data";
import Video from "~/components/Video";
import FooterNav from "~/components/FooterNav";
import Button from "~/components/Button";
import IconArrow from "~/components/IconArrow";
import IconOpen from "~/components/IconOpen";
import IconDivider from "~/components/IconDivider";

const Vector = () => {
  const footerNavLinks = [
    footerNavLinksData[FooterLinkKey.FootballApp],
    footerNavLinksData[FooterLinkKey.EmailOctopus],
  ];
  return (
    <>
      <Head>
        <meta name="description" content="" />
      </Head>
      <section className="mt-13 mb-11 flex items-center justify-between md:mt-24">
        <Link href="/">
          <Button>
            <IconArrow />
          </Button>
        </Link>
        <Link href="https://vector-digital.co.uk/" target="_blank">
          <Button className="flex items-center">
            Live site
            <IconOpen className="ml-2" />
          </Button>
        </Link>
      </section>
      <section>
        <article className="mb-14 md:mb-24">
          <Image
            src="/images/vector/img-vector.png"
            alt="Vector design"
            loading="eager"
            priority={true}
            className="mb-10 w-full md:mb-14"
            width={2404}
            height={1264}
          />
          <div className="mx-auto mb-10 max-w-4xl md:mb-14">
            <h1 className="mb-8">New brand for new beginnings</h1>
            <p className="mb-5">
              Vector is a London based Design agency specialized on SaaS
              products where I had the oportunity to work as a UI/UX Designer
              for 3 years.
            </p>
            <p className="mb-5">
              During these years we made small changes to the former site, but
              after a while we realized that Vector&#39;s brand was due to a
              redesign.
            </p>
            <p className="mb-6">
              It wasn&#39;t just a brand refreshment, Vector wanted to change,
              to grow and show its potential clients that they are not just web
              designers, they are a now specialist SaaS design studio focussing
              on retention.
            </p>
            <span className="uppercase text-peach-500">
              Branding - UX/UI Design
            </span>
          </div>
          <Image
            src="/images/vector/img-v-desktop-mobile.png"
            alt="Vector Desktop Mobile design"
            loading="lazy"
            className="w-full"
            width={2404}
            height={1264}
          />
        </article>
        <article className="mb-14 md:mb-24">
          <div className="mx-auto mb-10 max-w-4xl md:mb-14">
            <h2 className="mb-8">The Beginning</h2>
            <p className="mb-5">
              With the help of Treacle - a specialist brand and copy agency for
              agencies - Vector&#39;s new positioning and voice was on the way
              but its visual appearance was barely beginning.
            </p>
            <p>
              We started to look out for keywords and concepts that would help
              us to bring the new vision to light. We wanted the brand to be
              honest, inspirational, Fun and a little daring.
            </p>
          </div>
        </article>
        <article className="mb-14 md:mb-24">
          <div className="mx-auto mb-10 max-w-4xl md:mb-14">
            <h2 className="mb-8">Brand</h2>
            <p className="mb-5">
              On the initial exploration I came up with 2 concepts for the
              visual language. The first one was thinking in Vector as guides
              that would help your product to grow. The second one was more
              focused on retention and how we wanted to help you (the client) to
              keep your users around you.
            </p>
            <p className="mb-5">
              In terms of personality we juggle in between a quirky image or a
              more mature approach. A quirky personality was in-line with us
              internally, but a more mature look and feel felt like the right
              path to take if we really wanted to grow and attract a broader
              target.
            </p>
            <p>
              These three below where initial draft created to have an idea of
              the approach we wanted to take:
            </p>
          </div>
          <Image
            src="/images/vector/img-v-drafts.png"
            alt="vector drafts"
            loading="lazy"
            className="mb-10 w-full flex-shrink-0 flex-grow-0 md:mb-14"
            width={2404}
            height={1264}
          />
          <div className="mx-auto mb-10 max-w-4xl md:mb-14">
            <p>
              After a few back and forwards we decided that retention was more
              inline with the direction Treacle was proposing and decided to
              represent this with “Orbits”, the client being the center and its
              users the elements around it.
            </p>
          </div>
          <Video
            src="/video/vid-v-orbit.mp4"
            className="mb-10 w-full md:mb-14"
          />
          <div className="mx-auto mb-10 max-w-4xl md:mb-14">
            <p>
              Along with the brand elements we also revamped the logo. We wanted
              something simple, with a little of uniqueness that also displayed
              the company&#39;s full name.
            </p>
          </div>
          <Image
            src="/images/vector/img-v-logos.png"
            alt="vector logo before and after"
            loading="lazy"
            className="mb-10 w-full md:mb-14"
            width={2404}
            height={800}
          />
          <div className="mx-auto mb-10 max-w-4xl md:mb-14">
            <p className="mb-5">
              For colour I wanted to bring this idea of growth through the
              greens, introduce some warmth with yellow CTAs and balance it out
              with a cream that would also help us to display projects with
              minimal colour clashes.
            </p>
            <p>
              In terms of typography we wanted something stylish that combined
              with the vibe we were looking for. We picked Tenor Sans with its
              moderness and Work Sans for a bit of contrast.
            </p>
          </div>
          <Image
            src="/images/vector/img-v-type-logo.png"
            alt="vector type colours"
            loading="lazy"
            className="mb-10 w-full md:mb-14"
            width={2404}
            height={988}
          />
        </article>
        <article className="mb-14 md:mb-24">
          <div className="mx-auto mb-10 max-w-4xl md:mb-14">
            <h2 className="mb-8">Website</h2>
            <p className="mb-5">
              The website&#39;s layout was designed alongside the brand
              elements. We wanted a layout that felt uncommon without being hard
              to navigate.
            </p>
            <p>
              For this reason I proposed a collapsable lateral navigation, it
              was uncommon compared with other agencies we looked at but also
              has a familiarity with dashboards that are part of many Saas
              products.
            </p>
          </div>
          <Image
            src="/images/vector/img-v-layout.png"
            alt="vector layout design"
            loading="lazy"
            className="mb-10 w-full flex-shrink-0 flex-grow-0 md:mb-14"
            width={2404}
            height={1264}
          />
          <div className="mx-auto mb-10 max-w-4xl md:mb-14">
            <p>
              Along with our skills in visual design we also wanted to show
              potential clients that we were able to create solutions that
              required extra thinking on behaviours and interactions.
            </p>
          </div>
          <Video
            src="/video/vid-v-interaction.mp4"
            className="mb-10 w-full md:mb-14"
          />
          <p className="mx-auto mb-10 max-w-4xl md:mb-14">
            The case study pages where the most important pages to design. We
            wanted our case studies to have and impact combining great imagery
            with animations.
          </p>
          <Video
            src="/video/vid-v-case.mp4"
            className="mb-10 w-full md:mb-14"
          />
        </article>
        <IconDivider className="mx-auto mb-14 md:mb-24" />
        <FooterNav links={footerNavLinks}></FooterNav>
      </section>
    </>
  );
};

export default Vector;
