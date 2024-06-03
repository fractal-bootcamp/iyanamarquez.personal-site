import BackButton from "./BackButton";

export default function Header() {
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Carousel (in test)",
      link: "/carousel",
    },
  ];
  return (
    <header className="flex items-center justify-between py-10 ">
      <div>
        <a aria-label="TailwindBlog" href="/">
          <div className="flex items-center justify-between">
            <div className="mr-3"></div>
            <div className="hidden h-6 text-2xl font-semibold sm:block">
              Iyana M.
            </div>
          </div>
        </a>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {navLinks.map((x) => {
          return (
            <a className="hidden font-medium sm:block" href={x.link}>
              {x.name}
            </a>
          );
        })}

        <div className="mr-5">
          <div
            className="relative inline-block text-left"
            data-headlessui-state=""
          ></div>
        </div>
      </div>
    </header>
  );
}
