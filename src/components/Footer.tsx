import Link from "next/link";
import Button from "~/components/Button";
import Arrow from "~/components/Arrow";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div
        className="
        container
        flex flex-col
        items-center
        justify-between
        py-2
        md:flex-row
      "
      >
        <small className="order-1 mt-4 text-base uppercase md:order-none md:mt-0">
          © {year} Andrea De Armas
        </small>
        <ul className="flex space-x-6 font-bold">
          <li>
            <Link
              className="uppercase"
              href="mailto:andrea.design@email.com"
              rel="noopener"
              target="_blank"
            >
              <Button>Email</Button>
            </Link>
          </li>
          <li>
            <Link
              className="uppercase"
              href="https://www.linkedin.com/in/andrea-alejandra-de-armas-nu%C3%B1ez-200200ba/"
              rel="noopener"
              target="_blank"
            >
              <Button>Linkedin</Button>
            </Link>
          </li>
        </ul>
      </div>
      <Link
        className="mx-auto mb-16 flex h-13 w-13 items-center justify-center rounded-full border border-black outline-1 outline-offset-2 outline-secondary transition-colors duration-300 hover:border-brown hover:bg-peach-600 focus:outline"
        href="#top"
      >
        <Arrow />
      </Link>
    </footer>
  );
};

export default Footer;
