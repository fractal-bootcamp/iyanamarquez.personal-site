import BackButton from "~/components/BackButton";
import Header from "~/components/Header";

export default function Projects() {
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
  ];
  return (
    <div>
      <BackButton />

      <Header />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      {projects.map((x) => {
        return (
          <div>
            <div className="grid gap-4 grid-cols-3 grid-rows-3">
              <h2>{x.name}</h2>
              <a href={x.link}>Visit</a>
              <img style={{ width: 150, height: 150 }} src={x.img}></img>
              <p>{x.desc}</p>
            </div>
          </div>
        );
      })}
      <ul></ul>
    </div>
  );
}
