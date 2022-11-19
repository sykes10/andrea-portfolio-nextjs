import Link from "next/link";

const Header = () => {
  return (
    <header className="container mt-4 flex items-center justify-between py-4 md:mt-0 md:py-6">
      <Link href="/" className="no-colour">
        <h1 className="text-2xl font-bold leading-tight md:text-3xl">
          Andrea
          <br />
          DN.
        </h1>
      </Link>
      <div className="flex items-center">
        {/* <work-svg class="mr-3 opacity-40" /> */}
        <div>
          <p className="inline">
            Work status: <span className="font-bold">Available</span>
          </p>
        </div>
      </div>{" "}
    </header>
  );
};

export default Header;
