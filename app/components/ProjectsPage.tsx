import BackButton from "~/components/BackButton";
import Header from "~/components/Header";

export default function ProjectsPage() {
  const projects = [
    {
      name: "project 1",
      img: "https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://simplecalculator-7d4924.netlify.app/",
      desc: "ndebfienfle",
    },
    {
      name: "project 2",
      img: "https://images.pexels.com/photos/207924/pexels-photo-207924.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://simonsaysgame23422.netlify.app/",
      desc: "ndebfienfle",
    },
    {
      name: "project 2",
      img: "https://images.pexels.com/photos/207924/pexels-photo-207924.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://simonsaysgame23422.netlify.app/",
      desc: "ndebfienfle",
    },
    {
      name: "project 2",
      img: "https://images.pexels.com/photos/207924/pexels-photo-207924.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://simonsaysgame23422.netlify.app/",
      desc: "ndebfienfle",
    },
    {
      name: "project 2",
      img: "https://images.pexels.com/photos/207924/pexels-photo-207924.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://simonsaysgame23422.netlify.app/",
      desc: "ndebfienfle",
    },
    {
      name: "project 2",
      img: "https://images.pexels.com/photos/207924/pexels-photo-207924.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://simonsaysgame23422.netlify.app/",
      desc: "ndebfienfle",
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
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <a href={x.link}>
                <img className="rounded-t-lg" src={x.img} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    {x.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 ">{x.desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 "
                >
                  Visit{" "}
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <ul></ul>
    </div>
  );
}
