import { json } from "@remix-run/node";

export function loader() {
    boom()
    return null;
}

export default function() {
    return <b>my page</b>
}