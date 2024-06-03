import BackButton from "~/components/BackButton";

export default function AboutPage() {
  return (
    <div>
      <section className="w-full">
        <div className="w-full mx-auto">
          <div className="w-full mx-auto flex justify-center">
            <img
              src="https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&w=800"
              className="rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] xs:w-[8rem] xs:h-[8rem] shadow-xl flex justify-center"
            ></img>{" "}
          </div>
          <div className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto mt-4  ">
            <h1 className="text-4xl font-serif text-center mb-4">About me</h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu
              sem integer vitae justo eget magna fermentum iaculis. Tempus quam
              pellentesque nec nam aliquam. Tristique magna sit amet purus
              gravida. Nec feugiat in fermentum posuere. Rutrum tellus
              pellentesque eu tincidunt tortor aliquam nulla. Cum sociis natoque
              penatibus et. Nec feugiat in fermentum posuere urna. Morbi
              tincidunt augue interdum velit euismod in pellentesque massa. Id
              leo in vitae turpis massa sed elementum tempus. Elementum sagittis
              vitae et leo duis ut diam. Suspendisse ultrices gravida dictum
              fusce. Fringilla urna porttitor rhoncus dolor purus.
            </p>
            <div className="flex justify-center">
              <a href="https://github.com/yayakix" target="_blank">
                <button
                  type="button"
                  className="text-white bg-[#24292F] hover:bg-[#24292F]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                >
                  <svg
                    className="w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Github
                </button>
              </a>
              <a href="https://github.com/yayakix" target="_blank">
                <button
                  type="button"
                  className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mb-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 48 48"
                    className="w-4 h-4 me-2"
                  >
                    <path
                      fill="#0288D1"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                    ></path>
                  </svg>
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <br></br>
    </div>
  );
}
