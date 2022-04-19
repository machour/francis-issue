import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      Working fine
      <Link to="/boom">This will error</Link>
    </div>
  );
}
