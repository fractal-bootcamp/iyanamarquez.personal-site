import { useNavigate } from "@remix-run/react";

export default function SomeComponent() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(-1);
      }}
    >
      back
    </button>
  );
}
