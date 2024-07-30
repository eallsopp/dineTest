// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, there is nothing to see here</p>
        <p>
          Go back to the <Link href="/">Homepage</Link>
        </p>
      </div>
    </>
  );
}
