import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <img src="" alt="picture of me"></img>
      <a href="/about">About</a>
      <a href="/projects">Projects</a>
    </div>
  );
}
