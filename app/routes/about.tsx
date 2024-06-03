import BackButton from "~/components/BackButton";

export default function About() {
  return (
    <div>
      <BackButton />
      <h1>About me</h1>
      <img
        style={{ width: 100, height: 50 }}
        src="https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&w=800"
      ></img>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer
        vitae justo eget magna fermentum iaculis. Tempus quam pellentesque nec
        nam aliquam. Tristique magna sit amet purus gravida. Nec feugiat in
        fermentum posuere. Rutrum tellus pellentesque eu tincidunt tortor
        aliquam nulla. Cum sociis natoque penatibus et. Nec feugiat in fermentum
        posuere urna. Morbi tincidunt augue interdum velit euismod in
        pellentesque massa. Id leo in vitae turpis massa sed elementum tempus.
        Elementum sagittis vitae et leo duis ut diam. Suspendisse ultrices
        gravida dictum fusce. Fringilla urna porttitor rhoncus dolor purus.
      </p>
      <a href="https://github.com/yayakix" target="_blank">
        <span>Github</span>
      </a>
      <br></br>
      <a href="https://www.linkedin.com/in/iyana-marquez/" target="_blank">
        <span>LinkedIn</span>
      </a>
    </div>
  );
}
