import { type NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";
import Arrow from "../components/Arrow";

const Home: NextPage = () => {
  return (
    <>
      <main className="mb-6 lg:mb-24">
        <section className="my-10 mx-auto flex max-w-4xl flex-col items-center justify-center md:gap-12 lg:my-32 lg:gap-24">
          <Image
            src="/images/andrea-header.png"
            alt="Andrea De Armas ilustration"
            className="h-full w-4/5 md:h-120 md:w-100"
            loading="eager"
            width={768}
            height={1048}
            priority={true}
          />
          <div className="mt-10 md:mt-0">
            <h1 className="mb-10 md:mb-13">
              That’s me on the back, a UI designer, geek and awkward tourist
              settle in London, who enjoys creating beautiful and intuitive
              digital products.
            </h1>
            <a href="#works" className="block">
              <Button className="mx-auto flex items-center md:mx-0">
                Selected work
                <Arrow className="ml-2 rotate-180" />
              </Button>
            </a>
          </div>
        </section>
        <section
          id="works"
          className="mx-auto max-w-screen-lg space-y-9 md:space-y-44"
        >
          <div className="mb-9 flex flex-col gap-9 md:mb-44 md:flex-row md:gap-20">
            <article className="w-full md:w-1/2">
              <Image
                src="/images/fidel-api.png"
                alt="Coming soon"
                loading="lazy"
                className="mb-4 w-full md:mb-10"
                width={936}
                height={936}
              />
              <h3 className="mb-3">Supporting payment experiences</h3>
              <span className="uppercase text-peach-500">
                Visual Design - UI Design
              </span>
            </article>
            <Link className="w-full md:w-1/2" href="/case-study/vector">
              <article>
                <Image
                  src="/images/Vector.png"
                  alt="Vector re-design"
                  loading="lazy"
                  className="mb-4 w-full md:mb-10"
                  width={936}
                  height={936}
                />
                <h3 className="mb-3">New brand for new beginnings</h3>
                <span className="uppercase text-peach-500">
                  Branding - UX/UI Design
                </span>
              </article>
            </Link>
          </div>
          <Link href="/case-study/emailoctopus" className="block">
            <article>
              <Image
                src="/images/emailoctopus.png"
                alt="emailoctopus design"
                loading="lazy"
                className="mb-4 w-full md:mb-10"
                width={1803}
                height={949}
              />
              <h3 className="mb-3">Re-branding a trusted Email platform</h3>
              <span className="uppercase text-peach-500">
                Branding - UX/UI Design
              </span>
            </article>
          </Link>
          <Link href="/case-study/ticket-tailor" className="block">
            <article className="mx-auto max-w-4xl">
              <Image
                src="/images/ticket-tailor.png"
                alt="emailoctopus design"
                loading="lazy"
                className="mb-4 w-full md:mb-10"
                width={1191}
                height={1201}
              />
              <h3 className="mb-3">A new identity for a group of dreamers</h3>
              <span className="uppercase text-peach-500">UX/UI Design</span>
            </article>
          </Link>
          <div className="mb-9 flex flex-col gap-9 md:mb-44 md:flex-row md:gap-20">
            <Link className="w-full md:w-1/2" href="/case-study/football-app">
              <article>
                <Image
                  src="/images/football-app.png"
                  alt="football app design"
                  loading="lazy"
                  className="mb-4 w-full md:mb-10"
                  width={704}
                  height={1002}
                />
                <h3 className="mb-3">Making a space or the ultimate fan</h3>
                <span className="uppercase text-peach-500">UX/UI Design</span>
              </article>
            </Link>
            <Link
              className="w-full md:w-1/2"
              href="/case-study/small-bussiness"
            >
              <article>
                <Image
                  src="/images/bussiness.png"
                  alt="bussiness design"
                  loading="lazy"
                  className="mb-4 w-full md:mb-10"
                  width={705}
                  height={1002}
                />
                <h3 className="mb-3">Giving a hand to the small business</h3>
                <span className="uppercase text-peach-500">UX/UI Design</span>
              </article>
            </Link>
          </div>
          <Link href="/case-study/atriom" className="mb-44 block">
            <article>
              <Image
                src="/images/atriom.png"
                alt="atriom design"
                loading="lazy"
                className="mb-4 w-full md:mb-10"
                width={1803}
                height={949}
              />
              <h3 className="mb-3">
                A startup looking for a clean and safe look
              </h3>
              <span className="uppercase text-peach-500">UX/UI Design</span>
            </article>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;
