import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { footerNavLinksData } from "~/data/footerNav";
import FooterNav from "~/components/FooterNav";
import CaseStudyNav from "~/components/CaseStudyNav";

const TicketTailor = () => {
  const footerNavLinks = [
    footerNavLinksData.EmailOctopus,
    footerNavLinksData.FootballApp,
  ];
  return (
    <>
      <Head>
        <title>AndreaDN. | TicketTailor case study</title>
        <meta
          name="description"
          content="TicketTailor website re-design case study"
        />
      </Head>
      <CaseStudyNav href="http://www.tickettailor.com/" />
      <section>
        <article className="mb-14 md:mb-24">
          <Image
            src="/images/ticket-tailor/img-tickettailor.png"
            alt="TicketTailor design"
            loading="eager"
            priority={true}
            className="mb-10 w-full md:mb-14"
            width={2404}
            height={1264}
          />
          <div className="mx-auto mb-10 max-w-4xl md:mb-14">
            <h1 className="mb-8">A new identity for a group of dreamers</h1>

            <p className="mb-5">
              Ticket Tailor approached Vector with a new vision for their brand
              and website. They wanted to put their old style to rest and bring
              some soul to their product.
            </p>
            <p className="mb-6">
              Our work was centred on the development of a new graphic language
              and the design of their new website. Mantainig only two existing
              elements, their logo and their signature purple.
            </p>
            <span className="uppercase text-peach-500">
              Branding - UX/UI Design
            </span>
          </div>
          <Image
            src="/images/ticket-tailor/img-tt-desktop-mobile.png"
            alt="TicketTailor desktop mobile"
            loading="lazy"
            className="w-full"
            width={2404}
            height={1124}
          />
        </article>
        <article className="mb-14 md:mb-24">
          <div className="mx-auto mb-10 max-w-4xl md:mb-14">
            <h2 className="mb-8">The Beginning</h2>
            <p className="mb-5">
              We started with an stablished group of values, the new design
              should be Simple, Soulful, Supportive and Stellar.
            </p>
            <p>
              After a 3 day of workshops we set all the directions we needed to
              take, beeing one of the main goals to make sure the Event
              organisers persieve the product as an easy and flexible tool to
              create their events.
            </p>
          </div>
          <Image
            src="/images/ticket-tailor/img-tt-words.png"
            alt="TicketTailor key words"
            loading="lazy"
            className="w-full flex-shrink-0 flex-grow-0"
            width={2166}
            height={937}
          />
        </article>
        <article className="mb-14 md:mb-24">
          <div className="mx-auto mb-10 max-w-4xl md:mb-14">
            <h2 className="mb-8">Brand</h2>
            <p>
              As mentioned previously, the logo and brand colours remained the
              same, so we worked arround them. We created a series of moodboards
              and worked together with the clients to select the most appropiate
              style for them.
            </p>
          </div>
          <Image
            src="/images/ticket-tailor/img-tt-moodboards.png"
            alt="TicketTailor Moodboards"
            loading="lazy"
            className="mb-10 w-full flex-shrink-0 flex-grow-0 md:mb-14"
            width={2276}
            height={1452}
          />
          <p className="mx-auto mb-10 max-w-4xl md:mb-14">
            To bring the new values - Simple, Soulful, Supportive and Stellar -
            to the brand we opted for a warm complementary pallet mixed with
            quirky illustrations that brought a sense of community and
            diversity.
          </p>
          <Image
            src="/images/ticket-tailor/img-tt-brand.png"
            alt="TicketTailor brand"
            loading="lazy"
            className="mb-10 w-full md:mb-14"
            width={2404}
            height={1424}
          />
          <p className="mx-auto mb-10 max-w-4xl md:mb-14">
            With{" "}
            <Link
              href="https://www.linkedin.com/in/beatrixhatcher/"
              target="_blank"
              className="font-bold hover:underline"
            >
              illustrator Beatrix Hatcher
            </Link>
            collaboration, a group of characters, icons and accents where
            created. Each character illustration is representing a different
            type of event since Ticket Tailor is a place for everyone who wants
            to create an event - as they say “You dream it. We’ll ticket it“.
          </p>
          <Image
            src="/images/ticket-tailor/img-tt-characters.png"
            alt="TicketTailor characters"
            loading="lazy"
            className="mb-10 w-full md:mb-14"
            width={2404}
            height={1264}
          />
        </article>
        <article className="mb-14 md:mb-24">
          <div className="mx-auto mb-10 max-w-4xl md:mb-14">
            <h2 className="mb-8">Website</h2>
            <p>
              With the initial brand elements defined we started to wireframe
              pages and create a visual language by implementing some of the
              graphic elements created.
            </p>
          </div>
          <Image
            src="/images/ticket-tailor/img-tt-full.png"
            alt="TicketTailor full"
            loading="lazy"
            className="mb-10 w-full flex-shrink-0 flex-grow-0 bg-peach-400 md:mb-14"
            width={2880}
            height={1937}
          />
          <Image
            src="/images/ticket-tailor/img-tt-mobile-group.png"
            alt="TicketTailor mobile"
            loading="lazy"
            className="mb-10 w-full flex-shrink-0 flex-grow-0 md:mb-14"
            width={2404}
            height={1264}
          />
          <p className="mx-auto mb-10 max-w-4xl md:mb-14">
            The pricing page became the most challenging page to create since
            the pricing system changed a few times in the course of the project.
            After a few explorations and test we, with the client’s help, came
            up with a solution adjusted to their system and goals.
          </p>

          <Image
            src="/images/ticket-tailor/img-tt-pricing.png"
            alt="TicketTailor pricing"
            loading="lazy"
            className="mb-10 w-full md:mb-14"
            width={2403}
            height={1264}
          />
        </article>
      </section>
      <FooterNav links={footerNavLinks}></FooterNav>
    </>
  );
};

export default TicketTailor;
