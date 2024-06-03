export default function TestCarousel() {
  const projects = [
    {
      name: "Calculator",
      img: "https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://simplecalculator-7d4924.netlify.app/",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Hangman",
      img: "https://images.pexels.com/photos/34809/loro-park-orca-fish.jpg?auto=compress&cs=tinysrgb&w=800",
      link: "https://hang-man-game6487.netlify.app/",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Sorry 700!",
      img: "https://images.pexels.com/photos/207924/pexels-photo-207924.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://simonsaysgame23422.netlify.app/",
      desc: "Rhoncus est pellentesque elit ullamcorper dignissim cras. Risus viverra adipiscing at in tellus integer feugiat. Adipiscing elit ut aliquam purus sit. Habitasse platea dictumst quisque sagittis. Massa vitae tortor condimentum lacinia quis vel eros donec ac.",
    },
    {
      name: "Simon Says",
      img: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://simonsaysgame23422.netlify.app/",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Coloring Game",
      img: "https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://coloringboxesgame.netlify.app/",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Sunset",
      img: "https://images.pexels.com/photos/1102909/pexels-photo-1102909.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://simonsaysgame23422.netlify.app/",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
  ];
  return (
    <div className=" flex justify-center">
      <div className="max-w-lg carousel carousel-center rounded-box">
        {projects.map((x) => {
          return (
            <div className="card w-96 bg-base-100 shadow-xl carousel-item h-full">
              <figure className="px-10 pt-10">
                <img src={x.img} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{x.name}</h2>
                <p>{x.desc}</p>
                <div className="card-actions">
                  <a href={x.link}>
                    <button className="btn btn-primary">Buy Now</button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
