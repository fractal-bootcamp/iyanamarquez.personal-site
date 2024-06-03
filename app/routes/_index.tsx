import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import HomePage from "~/components/Homepage";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header />
      <HomePage />
    </div>
  );
}
