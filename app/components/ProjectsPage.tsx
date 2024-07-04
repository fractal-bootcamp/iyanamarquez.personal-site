import BackButton from "~/components/BackButton";
import Header from "~/components/Header";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Calculator",
      img: "https://images.pexels.com/photos/6927334/pexels-photo-6927334.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://simplecalculator-7d4924.netlify.app/",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Hangman",
      img: "data:image/png;base64,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",
      link: "https://hang-man-game6487.netlify.app/",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },

    {
      name: "Simonn Says",
      img: "https://images.pexels.com/photos/414648/pexels-photo-414648.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://simonsaysgame23422.netlify.app/",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Coloring Game",
      img: "https://images.pexels.com/photos/194098/pexels-photo-194098.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://coloringboxesgame.netlify.app/",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Sunset",
      img: "https://images.pexels.com/photos/1102909/pexels-photo-1102909.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://simonsaysgame23422.netlify.app/",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Sorry 700!",
      img: "https://images.pexels.com/photos/40799/paper-colorful-color-loose-40799.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://simonsaysgame23422.netlify.app/",
      desc: "Rhoncus est pellentesque elit ullamcorper dignissim cras. Risus viverra adipiscing at in tellus integer feugiat. Adipiscing elit ut aliquam purus sit. Habitasse platea dictumst quisque sagittis. Massa vitae tortor condimentum lacinia quis vel eros donec ac.",
    },
  ];
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold underline flex items-center justify-center">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {projects.map((x) => {
          return (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow relative">
              <a href={x.link}>
                <img
                  className="rounded-t-lg max-h-72 object-cover	w-full "
                  src={x.img}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    {x.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 block">{x.desc}</p>
                {/* Buttons container */}
                <div style={{ height: 50 }}></div>
                <div className="absolute bottom-2">
                  <a href={x.link} target="_blank">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-black">
                        Live Link{" "}
                      </span>
                    </button>
                  </a>
                  <a href="https://github.com/yayakix" target="_blank">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 text-black">
                        View Code{" "}
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      hello
      {/* erm */}
    </div>
  );
}
